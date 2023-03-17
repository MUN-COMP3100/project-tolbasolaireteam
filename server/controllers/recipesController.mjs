import { Recipe } from '../model/Recipe.mjs';

/**
 * Returns recipes that match the given ingredients. The number of results is limited to 10.
 * The ingredients are joined with a space, so the search is for recipes that contain all of the ingredients.
 * The results are sorted by the textScore, which is a MongoDB feature that ranks the results by how well they 
 * match the search.
 * @param {Request} req - The request object. 
 * @param {Response} res - The response object.
 * @returns  
 */
export const findRecipeByTime = async (req, res) => {   
    // if (!req?.query?.total) return res.status(400).json({ 'message': 'Time required.' });
    if (!req?.query?.total) return res.json({ 'message': 'Time required.' });
    console.log('here')
    const result = await Recipe.find(
        { $text: { $search: req.query.total.join(' ') } },
        { score: { $meta: "textScore" } }
    ).sort(
            { score: { $meta: "textScore"}}
    ).exec();
    if (result.length === 0) {
        return res.status(204).json({ "message": `No recipes match the time ${req.query.total}.` });
    }
    console.log(result.length);
    res.json(result);
}

/**
 * Returns recipes that match the given ingredients. The number of results is limited to 10.
 * The ingredients are joined with a space, so the search is for recipes that contain all of the ingredients.
 * The results are sorted by the textScore, which is a MongoDB feature that ranks the results by how well they 
 * match the search.
 * @param {Request} req - The request object. 
 * @param {Response} res - The response object.
 * @returns  
 */
export const findRecipeByIngredient = async (req, res) => {   
    // if (!req?.query?.ingredients) return res.status(400).json({ 'message': 'Ingredients required.' });
    if (!req?.query?.ingredients) return res.json({ 'message': 'Ingredients required.' });

    const result = await Recipe.find(
        { $text: { $search: req.query.ingredients.join(' ') } },
        { score: { $meta: "textScore" } },
    ).sort(
            { score: { $meta: "textScore"}}
    ).limit(200).exec();
    if (result.length === 0) {
        // return res.status(204).json({ "message": `No recipes match the ingredients ${req.query.ingredients}.` });
        return res.json({ "message": `No recipes match the ingredients ${req.query.ingredients}.` });
    }
    res.json(result);
}

/**
 * Returns the recipes that match the given type of dish, i.e. beef, chicken, etc.
 * @param {*} req - The request object.
 * @param {*} res - The response object.
 * @returns - The recipes that match the given type of dish.
 */
export const findRecipeByType = async (req, res) => {
    if (!req?.query?.type) return res.json({ 'message': 'Type required.' });
    const result = await Recipe.find({ingredients: {$regex: req.query.type}}).exec();
    if (result.length === 0) {
        return res.json({ "message": `No recipes match the type ${req.query.type}.` });
    }
    res.json(result);
}

/**
 * Returns all recipes in the database.
 * @param {Request} req - The request object. 
 * @param {Response} res - The response object.
 * @returns 
 */
export const getAllRecipes = async (req, res) => {
    const results = await Recipe.find();
    if (!results) return res.status(204).json({ 'message': 'No recipes found.' });
    res.json(results);
}


/**
 * Adds a new recipe to the database.
 * @param {Request} req - The request object. 
 * @param {Response} res - The response object.
 * @returns 
 */
export const createNewRecipe = async (req, res) => {
    if (!req?.body?.name || !req?.body?.summary || !req?.body?.ingredients || !req?.body?.instructions) {
        // return res.status(400).json({ 'message': 'Recipe name, ingredients, instructions, and a summary are required.' });
        return res.json({ 'message': 'Recipe name, ingredients, instructions, and a summary are required.' });
    }

    try {
        const result = await Recipe.create({
            name: req.body.name,
            summary: req.body.summary,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            url: req.body.url,
            category: req.body.category,
            author: req.body.author,
            rating: req.body.rating,
            rating_count: req.body.rating_count,
            review_count: req.body.review_count,
            prep: req.body.prep,
            cook: req.body.cook,
            total: req.body.total,
            servings: req.body.servings,
            yield: req.body.yield,
            calories: req.body.calories,
            carbohydrates_g: req.body.carbohydrates_g,
            sugars_g: req.body.sugars_g,
            fat_g: req.body.fat_g,
            saturated_fat_g: req.body.saturated_fat_g,
            cholesterol_mg: req.body.cholesterol_mg,
            protein_g: req.body.protein_g,
            dietary_fiber_g: req.body.dietary_fiber_g,
            sodium_mg: req.body.sodium_mg,
            calories_from_fat: req.body.calories_from_fat,
            calcium_mg: req.body.calcium_mg,
            iron_mg: req.body.iron_mg,
            magnesium_mg: req.body.magnesium_mg,
            potassium_mg: req.body.potassium_mg,
            zinc_mg: req.body.zinc_mg,
            phosphorus_mg: req.body.phosphorus_mg,
            vitamin_a_iu_IU: req.body.vitamin_a_iu_IU,
            niacin_equivalents_mg: req.body.niacin_equivalents_mg,
            vitamin_b6_mg: req.body.vitamin_b6_mg,
            vitamin_b12_mcg: req.body.vitamin_b12_mcg,
            vitamin_c_mg: req.body.vitamin_c_mg,
            folate_mcg: req.body.folate_mcg,
            thiamin_mg: req.body.thiamin_mg,
            riboflavin_mg: req.body.riboflavin_mg,
            vitamin_e_iu_IU: req.body.vitamin_e_iu_IU,
            vitamin_k_mcg: req.body.vitamin_k_mcg,
            biotin_mcg: req.body.biotin_mcg,
            vitamin_b12_mcg: req.body.vitamin_b12_mcg,
            mono_fat_g: req.body.mono_fat_g,
            poly_fat_g: req.body.poly_fat_g,
            trans_fatty_acid_g: req.body.trans_fatty_acid_g,
            omega_3_fatty_acid_g: req.body.omega_3_fatty_acid_g,
            omega_6_fatty_acid_g: req.body.omega_6_fatty_acid_g
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

/**
 * Updates a recipe in the database.
 * @param {Request} req - The request object. 
 * @param {Response} res - The response object. 
 * @returns 
 */
export const updateRecipe = async (req, res) => {
    if (!req?.body?.id) {
        // return res.status(400).json({ 'message': 'Recipe ID parameter is required.' });
        return res.json({ 'message': 'Recipe ID parameter is required.' });
    }

    const recipe = await Recipe.findOne({ _id: req.body.id }).exec();
    if (!recipe) {
        return res.status(204).json({ "message": `No recipe matches ID ${req.body.id}.` });
    }
    if (req.body?.ingredients) Recipe.ingredients = req.body.ingredients;
    if (req.body?.instructions) Recipe.instructions = req.body.instructions;
    const result = await recipe.save();
    res.json(result);
}

/**
 * Deletes a recipe from the database.
 * @param {Request} req - The request object. 
 * @param {Response} res - The response object. 
 * @returns 
 */
export const deleteRecipe = async (req, res) => {
    // if (!req?.body?.id) return res.status(400).json({ 'message': 'Recipe ID required.' });
    if (!req?.body?.id) return res.json({ 'message': 'Recipe ID required.' });

    const recipe = await Recipe.findOne({ _id: req.body.id }).exec();
    if (!recipe) {
        return res.status(204).json({ "message": `No recipe matches ID ${req.body.id}.` });
    }
    const result = await recipe.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

/**
 * Find a recipe by ID.
 * @param {Request} req - The request object. 
 * @param {Response} res - The response object. 
 * @returns 
 */
export const getRecipe = async (req, res) => {
    // if (!req?.params?.id) return res.status(400).json({ 'message': 'Recipe ID required.' });
    if (!req?.params?.id) return res.json({ 'message': 'Recipe ID required.' });
    
    const recipe = await Recipe.findOne({ _id: req.params.id }).exec();
    if (!recipe) {
        return res.status(204).json({ "message": `No recipe matches ID ${req.params.id}.` });
    }
    res.json(recipe);
}