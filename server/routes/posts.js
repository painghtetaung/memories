import express from 'express'
//controllers
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//routes(API)
///posts
router.get('/', getPosts);
router.post('/', createPost)

export default router;