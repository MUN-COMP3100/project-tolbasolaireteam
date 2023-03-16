import express from 'express';
import { handleLogout } from '../controllers/logoutController.mjs';

export const router = express.Router();

router.get('/', handleLogout);