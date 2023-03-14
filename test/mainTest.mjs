import { strictEqual, fail } from 'assert';
import { User } from '../model/User.mjs';
import { validate_fields } from '../config/validateFields.mjs';
import axios from 'axios';

const create = axios.create;

var myurl = 'http://localhost:3500';           
// Let's configure the base url
const instance = create({
    baseURL: myurl,
    timeout: 5000, //5 seconds max
    headers: {'content-type': 'application/json'}
});

describe('Meal Planner App - Tests with Mocha', function(){
    describe('Test API calls', function(){
        describe('users', function(){
            it('Fail 1. POST(register/sign-up user) - Test invalid first name in object', async function(){
                let response = await instance.post('/register', {
                    firstName: 'Amilcar123',
                    lastName: 'Soares',
                    pwd: '123456',
                    email: 'amilcars@mun.ca'
                });
                strictEqual(response.data.message, 'Invalid fields.');
            });

        });
    });
});    
    // describe('Test Controllers', function(){
    //     describe('Register Controller', function(){
