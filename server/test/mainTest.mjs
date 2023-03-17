import { strictEqual } from 'assert';
import axios from 'axios';
import { assert } from 'console';



const create = axios.create;

var myurl = 'http://localhost:3500';           

const instance = create({
    baseURL: myurl,
    timeout: 5000, 
    headers: {'content-type': 'application/json'}
});

describe('Meal Planner App - Tests with Mocha', function()
{// ########################################## TEST ROUTES ##########################################
    describe('Test routes', function()
    { 
        describe('Test the /register route to sign-up a new user to the web app', function()
        { // ########################################## TEST /register ##########################################
            it('Fail 1. POST - Try to register/sign-up user with invalid first name in object.\n' +
            '           This test should fail with a response message of "Invalid fields."',
            async function() 
            {
                let response = await instance.post('/register', 
                {
                    firstName: 'Amilcar123',
                    lastName: 'Soares',
                    password: '123456',
                    email: 'amilcars@mun.ca'
                });
                strictEqual(response.data.message, 'Invalid fields.');
            });

            it('Fail 2. POST - Try to register/sign-up user with an empty required field (the password) in object.\n' +
            '           This test should fail with a response message of "First and last name, email, and password are required."', 
            async function() 
            {
                let response = await instance.post('/register', 
                {
                    firstName: 'Amilcar',
                    lastName: 'Soares',
                    email: 'amilcars@mun.ca'
                });
                strictEqual(response.data.message, 'First and last name, email, and password are required.');
            });

            it('Fail 3. POST - Try to register/sign-up user with an email that is already registered.\n' +
            '           This test should fail with a response message of "Email is already registered."',
            async function() 
            {
                let response = await instance.post('/register', 
                {
                    firstName: 'Amilcar',
                    lastName: 'Soares',
                    password: '123456',
                    email: 'amilcars@mun.ca'
                });
                strictEqual(response.data.message, 'Email is already registered.');
            });

            it('Pass 1. POST - Try to register/sign-up a new user.\n' +
            '           This test should pass with a response message of "New user amilcars1@mun.ca created!"',
            async function() 
            {
                let response = await instance.post('/register', 
                {
                    firstName: 'Amilcar',
                    lastName: 'Soares',
                    password: '123456',
                    email: 'amilcars1@mun.ca'
                });
                await instance.delete('/users',
                {
                    data: {
                        email: 'amilcars1@mun.ca'
                        }
                });
                strictEqual(response.data.success, 'New user amilcars1@mun.ca created!');
            });
        });

        describe('Test the /auth route to sign-in a user to the web app', function()
        {// ########################################## TEST /auth ##########################################
            it('Fail 1. POST - Try to sign-in a user with an empty required field (the email in this case).\n' +
            '           This test should fail with a response message of "Email and password are required."',
            async function()
            {
                let response = await instance.post('/auth',
                {
                    email: null,
                    password: '123456'
                });
                strictEqual(response.data.message, 'Email and password are required.');
            });

            it('Fail 2. POST - Try to sign-in a user with an invalid email.\n' +
            '           This test should fail with a response message of "User not found."',
            async function()
            {
                let response = await instance.post('/auth',
                {
                    email: 'greg@gmail.com',
                    password: '123456'
                });
                strictEqual(response.data.message, 'User not found.');
            });

            it('Fail 3. POST - Try to sign-in a user with an invalid password.\n' +
            '           This test should fail with a response message of "Password does not match."',
            async function()
            {
                let response = await instance.post('/auth',
                {
                    email: 'griffithsdrew@gmail.com',
                    password: '1234567'
                });
                strictEqual(response.data.message, 'Password does not match.');
            });

            it('Pass 1. POST - Try to sign-in a user with a valid email and password.\n' +
            '           This test should pass with a access token and an array of roles.',
            async function()
            {
                let response = await instance.post('/auth',
                {
                    email: 'griffithsdrew@gmail.com',
                    password: 'abcd1234'
                });
                strictEqual(response.data.roles[0], 2001);
            });

        });

        describe('Test the /recipes route API to get recipes from the web app', function()
        {
            describe('Test the /recipes route to create a new recipe', function()
            {// ########################################## TEST /recipes ##########################################
                it('Fail 1. POST - Try to create a new recipe missing a required field (name in this case).\n' +
                '           This test should fail with a response message of "Recipe name, ingredients, directions, and a summary are required."',
                async function() {
                    let response = await instance.post('/recipes',
                    {
                        name: null,
                        ingredients: '1 cup of flour, 1 cup of sugar, 1 cup of water',
                        directions: 'Mix all ingredients together and bake at 350 degrees for 30 minutes.',
                        summary: 'A delicious cake.'
                    });
                    strictEqual(response.data.message, 'Recipe name, ingredients, directions, and a summary are required.');
                });

                it('Pass 1. POST -Try to create a new recipe.\n' +
                    '           This test should pass with response instanceof Recipe equalling true.',
                async function() {
                    let response = await instance.post('/recipes',
                    {
                        name: 'Cake',
                        ingredients: '1 cup of flour, 1 cup of sugar, 1 cup of water',
                        directions: 'Mix all ingredients together and bake at 350 degrees for 30 minutes.',
                        summary: 'A delicious cake.'
                    });
                    strictEqual(response.data.name, 'Cake');
                });
            });

            describe('Test the /recipes route to amend a recipe', function()
            {
                it('Fail 1. PUT - Try to update a recipe with the missing "name" field.\n' +
                '           This test should fail with a response message of "Recipe name is required."',
                async function() {
                    let response = await instance.put('/recipes',
                    {
                        name: null,
                        ingredients: '1 cup of flour, 1 cup of sugar, 1 cup of water, 1 egg'
                    });
                    strictEqual(response.data.message, 'Recipe name is required.');
                });

                it('Fail 2. PUT - Try to update a recipe with a name that does not match to any in the database.\n' +
                '           This test should fail with a response message of "No recipe matches the name Nuclear bomb."',
                async function() {
                    let response = await instance.put('/recipes',
                    {
                        name: 'Nuclear bomb',
                        ingredients: '1 cup of flour, 1 cup of sugar, 1 cup of water, 1 egg'
                    });
                    strictEqual(response.data.message, 'No recipe matches the name Nuclear bomb.');
                });

                it('Pass 1. PUT - Try to update a recipe with a name that matches to one in the database.\n' +
                '           This test should pass with a response message of "Recipe Cake updated."',
                async function() {
                    let response = await instance.put('/recipes',
                    {
                        name: 'Cake',
                        ingredients: '1 cup of flour, 1 cup of sugar, 1 cup of water, 1 egg'
                    });
                    strictEqual(response.data.message, 'Recipe Cake updated.');
                });
            });

            describe('Test the /recipes route to delete a recipe', function()
            {
                it('Fail 1. DELETE - Try to delete a recipe with the missing "name" field.\n' +
                '           This test should fail with a response message of "Recipe name is required."',
                async function() {
                    let response = await instance.delete('/recipes',
                    {
                        name: null
                    });
                    strictEqual(response.data.message, 'Recipe name is required.');
                });

                it('Fail 2. DELETE - Try to delete a recipe with a name that does not match to any in the database.\n' +
                '           This test should fail with a response message of "No recipe matches the name Nuclear bomb."',
                async function() {
                    let response = await instance.delete('/recipes',
                    {
                        data: {
                            name: 'Nuclear bomb'
                        }
                    });
                    strictEqual(response.data.message, 'No recipe matches the name Nuclear bomb.');
                });

                it('Pass 1. DELETE - Try to delete a recipe with a name that matches to one in the database.\n' +
                '           This test should pass with a response message of "Recipe Cake deleted."',
                async function() {
                    let response = await instance.delete('/recipes',
                    {
                        data : {
                            name: 'Cake'
                        }
                    });
                    strictEqual(response.data.message, 'Recipe Cake deleted.');
                });
            });
        
            describe('Test the /recipes route to get a single recipe', function()
            {
                it('Fail 1. GET - Try to get a recipe with the missing "name" field.\n' +
                '           This test should fail with a response message of "Recipe name is required."',
                async function() {
                    let response = await instance.get('/recipes', 
                    {
                        params: {
                            name: null
                            }
                    });
                    strictEqual(response.data.message, 'Recipe name is required.');
                });

                it('Fail 2. GET - Try to get a recipe with a name that does not match to any in the database.\n' +
                '           This test should fail with a response message of "No recipe matches the name Nuclear bomb."',
                async function() {
                    let response = await instance.get('/recipes',
                    {
                        params: {
                            name: 'Nuclear bomb'
                        }
                    });
                    strictEqual(response.data.message, 'No recipe matches the name Nuclear bomb.');
                });

                it('Pass 1. GET - Try to get a recipe with a name that matches to one in the database.\n' +
                '           This test should pass with a JSON object containing the recipe with the name Simple Macaroni and Cheese.',
                async function() {
                    let response = await instance.get('/recipes',
                    {
                        params: {
                            name: 'Simple Macaroni and Cheese'
                        }
                    });
                    strictEqual(response.data.name, 'Simple Macaroni and Cheese');
                });
            });

            describe('Test the /recipes/findByIngredients route to get recipes by ingredients', function()
            {// ########################################## TEST /recipes/findByIngredients ##########################################
                it('Fail 1. GET - Try to get recipes by ingredients with no ingredients.\n' +
                '           This test should fail with a response message of "Ingredients required."',
                async function() {
                    let response = await instance.get('/recipes/findByIngredients');
                    strictEqual(response.data.message, 'Ingredients required.');
                });

                it('Fail 2. GET - Try to get recipes by ingredients with an invalid ingredient.\n' +
                '           This test should fail with a response message of "No recipes match the ingredients battery,plutonium."',
                async function() {
                    let response = await instance.get('/recipes/findByIngredients?ingredients=battery&ingredients=plutonium');
                    strictEqual(response.data.message, 'No recipes match the ingredients battery,plutonium.');
                });

                it('Pass 1. GET - Try to get recipes by ingredients with valid ingredients.\n' +
                '           This test should pass with data in the response.data object.', 
                async function() {
                    let response = await instance.get('/recipes/findByIngredients?ingredients=macaroni&ingredients=butter&ingredients=flour&ingredients=salt&ingredients=milk&ingredients=cheese');
                    assert(response.data);
                });
            });

            describe('Test the /recipes/findByType route to get recipes by type', function()
            {// ########################################## TEST /recipes/findByType ##########################################
                it('Fail 1. GET - Try to get recipes by type with no type.\n' +
                '           This test should fail with a response message of "Type required."',
                async function() {
                    let response = await instance.get('/recipes/findByType');
                    strictEqual(response.data.message, 'Type required.');
                });

                it('Fail 2. GET - Try to get recipes by type with an invalid type.\n' +
                '           This test should fail with a response message of "No recipes match the type invalid."',
                async function() {
                    let response = await instance.get('/recipes/findByType?type=invalid');
                    strictEqual(response.data.message, 'No recipes match the type invalid.');
                });

                it('Pass 1. GET - Try to get recipes by type with valid type.\n' +
                '           This test should pass with data in the response.data object.', 
                async function() {
                    let response = await instance.get('/recipes/findByType?type=main course');
                    assert(response.data);
                });
            });
        });


    });
});    
