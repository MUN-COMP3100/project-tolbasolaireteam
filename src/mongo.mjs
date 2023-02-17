import { MongoClient } from "mongodb";

const URI = 'mongodb+srv://djamesg:ow4g2YAVuUWgNOJp@cluster0.nat73ng.mongodb.net/recipesData?retryWrites=true&w=majority'
export const client = new MongoClient(URI);


export async function listDatabases(client) {
    try {
        await client.connect();
        const databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

export async function createRecipe(client, newRecipe) {
    try {
        await client.connect();
        const result = await client.db("recipesData").collection("recipes").insertOne(newRecipe);
        console.log(`New recipe created with the following id: ${result.insertedId}`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function createMultipleRecipes(client, newRecipes) {
    try {
        await client.connect();
        const result = await client.db("recipesData").collection("recipes").insertMany(newRecipes);
        console.log(`${result.insertedCount} new recipe(s) created with the following id(s):`);
        console.log(result.insertedIds);    
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function findRecipeByIngredient(client, ingredient, limit = 10) {
    try {
        await client.connect();
        const cursor = await client.db("recipesData").collection("recipes").find({ingredients: {$regex: ingredient}}).limit(limit);
        const result = await cursor.toArray();
        return Promise.resolve(result);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function findRecipeByName(client, name, limit = 10) {
    try {
        await client.connect();
        const cursor = await client.db("recipesData").collection("recipes").find({name: {$regex: name}}).limit(limit);
        const result = await cursor.toArray();
        return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function findRecipeByCategory(client, category, limit = 10) {
    try {
        await client.connect();
        const cursor = await client.db("recipesData").collection("recipes").find({category: {$regex: category}}).limit(limit);
        const result = await cursor.toArray();
        return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function findRecipeByCuisine(client, cuisine, limit = 10) {
    try {
        await client.connect();
        const cursor = await client.db("recipesData").collection("recipes").find({cuisine: {$regex: cuisine}}).limit(limit);
        const result = await cursor.toArray();
        return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function findRecipeByTime(client, time, limit = 10) {
    try {
        await client.connect();
        const cursor = await client.db("recipesData").collection("recipes").find({total: {$regex: time}}).limit(limit);
        const result = await cursor.toArray();
        return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function findRecipeByRating(client, rating, limit = 10) {
    try {
        await client.connect();
        const cursor = await client.db("recipesData").collection("recipes").find({rating: {$gte: rating}}).limit(limit);
        const result = await cursor.toArray();
        return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function findRecipeByCalories(client, calories, limit = 10) {
    try {
        await client.connect();
        const cursor = await client.db("recipesData").collection("recipes").find({calories: {$lte: calories}}).limit(limit);
        const result = await cursor.toArray();
        return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export async function findRecipeByFat(client, fat, limit = 10) {
    try {
        await client.connect();
        const cursor = await client.db("recipesData").collection("recipes").find({fat_g: {$lte: fat}}).limit(limit);
        const result = await cursor.toArray();
        return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


