import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { corsOptions } from './config/corsOptions.mjs';
import { logger } from './middleware/logEvents.mjs';
import { errorHandler } from './middleware/errorHandler.mjs';
import { verifyJWT } from './middleware/verifyJWT.mjs';
import cookieParser from 'cookie-parser';
import { credentials } from './middleware/credentials.mjs';
import mongoose from 'mongoose';
import { connectDB } from './config/dbConn.mjs';

dotenv.config();
mongoose.set('strictQuery', false); // silence deprecation warning for upcoming mongoose version

const app = express();
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials (await(importment
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(fileURLToPath(new URL('./public', import.meta.url))));
app.use('/subdir', express.static(fileURLToPath(new URL('./public', import.meta.url))));

// routes
app.use('/', (await import('./routes/root.mjs')).router);
app.use('/register', (await import('./routes/register.mjs')).router);
app.use('/auth', (await import('./routes/auth.mjs')).router);
app.use('/refresh', (await import('./routes/refresh.mjs')).router);
app.use('/logout', (await import('./routes/logout.mjs')).router);

app.use(verifyJWT); 
app.use('/recipes', (await import('./routes/api/recipes.mjs')).router);
app.use('/users', (await import('./routes/api/users.mjs')).router);

//a catch all route for anything that doesn't match the above routes
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(fileURLToPath(new URL('./views/404.html', import.meta.url)));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.log('Closing Mongo Client.');
    mongoose.connection.close();
    console.log('Mongo Client closed.');
    process.exit(0);
});
