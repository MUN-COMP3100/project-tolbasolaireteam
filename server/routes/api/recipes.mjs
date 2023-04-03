import express from 'express';
import * as recipesController from '../../controllers/recipesController.mjs';
import { ROLES_LIST } from '../../config/roles_list.mjs';
import { verifyRoles } from '../../middleware/verifyRoles.mjs';

export const router = express.Router();

router.route('/')
    // .get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), recipesController.getAllRecipes)
    // .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), recipesController.createNewRecipe)
    // .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), recipesController.updateRecipe)
    // .delete(verifyRoles(ROLES_LIST.Admin), recipesController.deleteRecipe);
    .get(recipesController.getRecipe)
    .post(recipesController.createNewRecipe)
    .put(recipesController.updateRecipe)
    .delete(recipesController.deleteRecipe);

router.route('/findByIngredients')
    // .get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor, ROLES_LIST.User), recipesController.findRecipeByIngredient);
    .get(recipesController.findRecipeByIngredient);

router.route('/findByType')
    // .get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor, ROLES_LIST.User), recipesController.findRecipeByType);
    .get(recipesController.findRecipeByType);

router.route('/randomGenerator')
    .get(recipesController.randomGenerator);