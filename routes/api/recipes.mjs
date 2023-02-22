import express from 'express';
import * as recipesController from '../../controllers/recipesController.mjs';
import { ROLES_LIST } from '../../config/roles_list.mjs';
import { verifyRoles } from '../../middleware/verifyRoles.mjs';

export const router = express.Router();

router.route('/')
    .get(recipesController.getAllRecipes)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), recipesController.createNewRecipe)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), recipesController.updateRecipe)
    .delete(verifyRoles(ROLES_LIST.Admin), recipesController.deleteRecipe);

router.route('/:ingredients')
    .get(recipesController.findRecipeByIngredient);