import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Token from '../model/token.js';
import User from '../model/user.js';

dotenv.config();

export const signupUser = async (request, response) => {
    try {
        const { username, name, password } = request.body;

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return response.status(400).json({ msg: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({ username, name, password: hashedPassword });

        // Save the user to MongoDB
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successful' });
    } catch (error) {
        console.error('Error while signing up user:', error);
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
};
export const loginUser = async (request, response) => {
    try {
        const { username, password } = request.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(400).json({ msg: 'Username does not exist' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            // Generate access token
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
            // Generate refresh token
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            // Save refresh token to database
            const newToken = new Token({ token: refreshToken });
            await newToken.save();

            // Return successful login response with tokens and user details
            return response.status(200).json({ accessToken, refreshToken, name: user.name, username: user.username });
        } else {
            // Password does not match
            return response.status(400).json({ msg: 'Password does not match' });
        }
    } catch (error) {
        console.error('Error while logging in user:', error);
        return response.status(500).json({ msg: 'Error while logging in the user' });
    }
};
export const logoutUser = async (request, response) => {
    try {
        const { token } = request.body;

        // Delete refresh token from database
        await Token.deleteOne({ token });

        // Return successful logout response
        return response.status(204).json({ msg: 'Logout successful' });
    } catch (error) {
        console.error('Error while logging out user:', error);
        return response.status(500).json({ msg: 'Error while logging out the user' });
    }
};