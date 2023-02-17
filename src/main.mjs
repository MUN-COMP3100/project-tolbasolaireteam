import { readFileSync } from 'fs';
import { client, createRecipe, createMultipleRecipes, listDatabases, findRecipeByIngredient } from './mongo.mjs';

let ingredient = 'beef'
findRecipeByIngredient(client, ingredient).then((result) => {
    console.log(result.length);
});


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