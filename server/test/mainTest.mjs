import { strictEqual, fail } from 'assert';
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
    describe('Test API calls', function()
    {
        describe('users', function()
        { 
            it('Fail 1. POST(register/sign-up user) - Test invalid first name in object.', 
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

            it('Fail 2. POST(register/sign-up user) - Test blank password', 
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

            it('Fail 3. POST(register/sign-up user) - Test email already registered.', 
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

            // it('Pass 2. POST(register/sign-up user) - Test valid first user.', 
            // async function() 
            // {
            //     let response = await instance.post('/register', 
            //     {
            //         firstName: 'Amilcar',
            //         lastName: 'Soares',
            //         password: '123456',
            //         email: 'amilcars@mun.ca'
            //     });
            //     strictEqual(response.data.message, 'New user amilcars@mun.ca created!');
            // });
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
