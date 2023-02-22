import express from 'express';
import { handleRefreshToken } from '../controllers/refreshTokenController.mjs';

export const router = express.Router();

router.get('/', handleRefreshToken);