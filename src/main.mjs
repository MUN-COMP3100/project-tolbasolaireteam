import { readFileSync } from 'fs';
import * as mongo from './mongo.mjs';
import { USERS } from './users.mjs';
import dotenv from "dotenv";
import mongoose from "mongoose";

mongoose.set('strictQuery', true);
dotenv.config();

// let ingredient = 'beef'

// // return a list of recipes that contain the ingredient beef and store in a variable named arr
// let arr = await mongo.findRecipeByIngredient(mongo.CLIENT, ingredient, 3);
// console.log(arr);

// // call anonymous function
// (async () => {
//     let category = "side-dish"
//     let arr = await mongo.findRecipeByCategory(mongo.CLIENT, category, 3);
//     console.log(arr);
// })();


const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nat73ng.mongodb.net/recipesData?retryWrites=true&w=majority`;

// use this mongoString when using macbook
// const mongoString = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-od9lxki-shard-00-00.nat73ng.mongodb.net:27017,ac-od9lxki-shard-00-01.nat73ng.mongodb.net:27017,ac-od9lxki-shard-00-02.nat73ng.mongodb.net:27017/?ssl=true&replicaSet=atlas-vgx94a-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on("error", function(error) {
    console.log(error);
})

mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.");
})

// create a new user using the schema from users.mjs
// const newUser = new USERS({
//     firstName: "John",
//     lastName: "Doe",
//     email: "123@gmail.com",
//     username: "123",
//     password: "123"
// })

// save the new user to the database using async/await
async function saveUser() {
    try {
        await newUser.save();
        console.log("User saved to database.");
    } 
    catch (error) {
        console.log(error);
    } 
    finally {
        await mongoose.connection.close();
    }
}

// saveUser();

// find a user using mongoose by their username and change their password
(async() => {
    try {
        let newUser = await USERS.findOne({username: "1234"}).exec();
        // check if the user exists
        if (newUser) {
            await newUser.save();
            console.log("User saved to database.");
        } else {
            console.log("User not found.");
        }
    } 
    catch (error) {
        console.log(error);
    } 
    finally {
       await mongoose.connection.close();
    }
})();









// const file = readFileSync('./recipeList2.0.json', 'utf-8');
// const data = JSON.parse(file);
// let count = 0;
// data.forEach((recipe) => 
// {
//     console.log(recipe.name); 
//     count += 1; 
// });

// console.log(count);


// function that acts like python's enumerate()
// function* enumerate (iterable, start = 0) { 
//     let i = start
//     for (const x of iterable)
//         yield [i++, x]
// }

// use example
// for (const [i, x] of enumerate(data))
//     console.log(i, x.name)