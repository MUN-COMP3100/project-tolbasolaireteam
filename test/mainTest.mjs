import { strictEqual, fail } from 'assert';
import { User } from '../model/User.mjs';
import { validate_fields } from '../config/validateFields.mjs';
import axios from 'axios';

const create = axios.create;

var myurl = 'http://localhost:3000';           
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

            it('Fail 3. POST(register/sign-up user) - Test valid first name.', 
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
            it('Pass 4. GET(Recipe) - Get recipe by ingredient.', 
            async function() 
            {
                let response = await instance.get('/register', {ingredients: "macaroni butter flour salt black pepper milk cheese"});
                
                strictEqual(response.data.name, 'Simple Macaroni and Cheese');
            });
        });


    });
});    
