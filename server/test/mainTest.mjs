import { strictEqual, fail, strict } from 'assert';
import { User } from '../model/User.mjs';
import { validate_fields } from '../config/validateFields.mjs';
import axios from 'axios';
import { assert } from 'console';


const create = axios.create;

var myurl = 'http://localhost:3500';           
// Let's configure the base url
const instance = create({
    baseURL: myurl,
    timeout: 5000, 
    headers: {'content-type': 'application/json'}
});

describe('Meal Planner App - Tests with Mocha', function()
{
    describe('Test routes', function()
    {
        describe('Test the /register route to sign-up a new user to the web app', function()
        { 
            it('Fail 1. Try to register/sign-up user with invalid first name in object.\n' +
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

            it('Fail 2. Try to register/sign-up user with an empty required field (the password) in object.\n' +
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

            it('Fail 3. Try to register/sign-up user with an email that is already registered.\n' +
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

            it('Pass 1. Try to register/sign-up a new user.\n' +
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
                strictEqual(response.data.success, 'New user amilcars1@mun.ca created!');
            });
        });

        describe('Test the /auth route to sign-in a user to the web app', function()
        {
            it('Fail 1. Try to sign-in a user with an empty required field (the email in this case).\n' +
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

            it('Fail 2. Try to sign-in a user with an invalid email.\n' +
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

            it('Fail 3. Try to sign-in a user with an invalid password.\n' +
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

            it('Pass 1. Try to sign-in a user with a valid email and password.\n' +
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



        describe('database', function()
        { 
            it('Fail 4. GET(Recipe) - Missing ingredients.',
            async function() {
                let response = await instance.get('/recipes/findByIngredients');
                strictEqual(response.data.message, 'Ingredients required.');
            });

            it('Fail 5. GET(Recipe) - Invalid ingredient.',
            async function() {
                let response = await instance.get('/recipes/findByIngredients?ingredients=battery&ingredients=plutonium');
                strictEqual(response.data.message, 'No recipes match the ingredients battery,plutonium.');
            });

            it('Pass 5. GET(Recipe) - Get recipe by ingredient.', 
            async function() {
                let response = await instance.get('/recipes/findByIngredients?ingredients=macaroni&ingredients=butter&ingredients=flour&ingredients=salt&ingredients=milk&ingredients=cheese');
                assert(response.data);
            });
        });


    });
});    
