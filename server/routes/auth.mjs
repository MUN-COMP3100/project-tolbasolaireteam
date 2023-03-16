import express from 'express';
import { handleLogin } from '../controllers/authController.mjs';

export const router = express.Router();

router.post('/', handleLogin);