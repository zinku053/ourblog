const mongoose = require('mongoose');
const mongoURI = 'process.env.MONGODB_URI || mongodb://localhost:27017/mydatabase';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Mongo connected');

    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = mongoDB;