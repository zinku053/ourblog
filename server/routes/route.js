import express from 'express';
import { loginUser, signupUser, logoutUser } from '../controller/user-controller.js';
import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../controller/post-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
//import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';
import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

// User routes
router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/logout', logoutUser);

// Post routes
router.post('/create', authenticateToken, createPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);
router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);

// Image routes
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

// Comment routes


// Token route (if needed)
router.post('/token', createNewToken);

export default router;
