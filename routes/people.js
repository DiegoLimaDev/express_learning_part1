import express from 'express';
import {
  deleteInPeople,
  getPeople,
  postInPeople,
  putInPeople,
} from '../controllers/people.js';

export const router = express.Router();

router.get('/', getPeople);

router.post('/', postInPeople);

router.put('/:id', putInPeople);

router.delete('/:id', deleteInPeople);
