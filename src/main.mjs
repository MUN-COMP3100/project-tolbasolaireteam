import { readFileSync } from 'fs';
const file = readFileSync('./recipeList2.0.json', 'utf-8');
const data = JSON.parse(file);
let count = 0;
data.forEach((recipe) => 
{
    console.log(recipe.name); 
    count += 1; 
});

console.log(count);