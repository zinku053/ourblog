import mongoose from 'mongoose';
//import dotenv from 'dotenv';

//dotenv.config();

const mongoURI = 'mongodb+srv://mihamaisha:ourblog@cluster0.au0xlrg.mongodb.net/helloBlog?retryWrites=true&w=majority&appName=Cluster0';
const connectDB = async (username, password) => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true, // Uncomment if needed
      });
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Ensure to exit the process if the database connection fails
    }
  };
  
  export { connectDB };