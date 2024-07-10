import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './database/db.js';
import Router from './routes/route.js'; // Assuming Router is correctly defined in './routes/route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/', Router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
});
