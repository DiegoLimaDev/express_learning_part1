import express from 'express';
import { authPost } from '../controllers/auth.js';

export const router = express.Router();

router.post('/', authPost);
