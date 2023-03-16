import express from 'express';
import { fileURLToPath } from 'url';

export const router = express.Router();

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(fileURLToPath(new URL('../views/index.html', import.meta.url))); 
});

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(fileURLToPath(new URL('../views/new-page.html', import.meta.url)));
});

router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); // 302 by default, manually set to 301
});