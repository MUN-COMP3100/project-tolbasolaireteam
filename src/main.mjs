import { readFileSync } from 'fs';
import * as mongo from './mongo.mjs';



let ingredient = 'beef'

// return a list of recipes that contain the ingredient beef and store in a variable named arr
let arr = await mongo.findRecipeByIngredient(mongo.CLIENT, ingredient, 3);
console.log(arr);

// call anonymous function
(async () => {
    let category = "side-dish"
    let arr = await mongo.findRecipeByCategory(mongo.CLIENT, category, 3);
    console.log(arr);
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