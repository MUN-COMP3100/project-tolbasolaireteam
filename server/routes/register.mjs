import express from 'express';
import { handleNewUser } from '../controllers/registerController.mjs';

export const router = express.Router();

router.post('/', handleNewUser);