import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection =async(USERNAME,PASSWORD) => {

    const MONGODB_URI = 'mongodb+srv://$(username):$(password)@blog-app.g5jsk3p.mongodb.net/?retryWrites=true&w=majority&appName=blog-app';

    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;