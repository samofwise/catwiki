import express from 'express';
import { getBreedInfo, getBreeds } from '../services/breedService';

const router = express.Router();

/*
  Breeds with string search
  Single breed (preferably with breed name not breed id)
   - send through image too
  Top 10 most searched breeds
*/

router.get('/', async (req, res) => {
  const breeds = await getBreeds();
  res.json(breeds);
});

router.get('/:id', async (req, res) => {
  const info = await getBreedInfo(req.params.id);
  res.json(info);
});

export default router;
