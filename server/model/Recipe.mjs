import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: String,
    category: String,
    author: String,
    summary: {
        type: String,
        required: true
    },
    rating: Number,
    rating_count: Number,
    review_count: Number,
    ingredients: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    prep: String,
    cook: String,
    total: String,
    servings: Number,
    yield: String,
    calories: Number,
    carbohydrates_g: Number,
    sugars_g: Number,
    fat_g: Number,
    saturated_fat_g: Number,
    cholesterol_mg: Number,
    protein_g: Number,
    dietary_fiber_g: Number,
    sodium_mg: Number,
    calories_from_fat: Number,
    calcium_mg: Number,
    iron_mg: Number,
    magnesium_mg: Number,
    potassium_mg: Number,
    zinc_mg: Number,
    phosphorus_mg: Number,
    vitamin_a_iu_IU: Number,
    niacin_equivalents_mg: Number,
    vitamin_b6_mg: Number,
    vitamin_c_mg: Number,
    folate_mcg: Number,
    thiamin_mg: Number,
    riboflavin_mg: Number,
    vitamin_e_iu_IU: Number,
    vitamin_k_mcg: Number,
    biotin_mcg: Number,
    vitamin_b12_mcg: Number,
    mono_fat_g: Number,
    poly_fat_g: Number,
    trans_fatty_acid_g: Number,
    omega_3_fatty_acid_g: Number,
    omega_6_fatty_acid_g: Number
});

export const Recipe = mongoose.model("recipe", recipeSchema);