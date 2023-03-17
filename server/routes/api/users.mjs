import express from 'express';
import * as usersController from '../../controllers/usersController.mjs';
import { ROLES_LIST } from '../../config/roles_list.mjs';
import { verifyRoles } from '../../middleware/verifyRoles.mjs';

export const router = express.Router();

router.route('/')
    // .get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
    // .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);
    .get(usersController.getAllUsers)
    .delete(usersController.deleteUser);

router.route('/:email')
    // .get(verifyRoles(ROLES_LIST.Admin), usersController.getUser);
    .get(usersController.getUser);