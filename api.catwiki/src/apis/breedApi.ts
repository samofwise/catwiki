import axios from 'axios';
import Breed from '../models/Breed';
import SimpleBreed from '../viewModels/SimpleBreed';

const breedApiUrl = 'https://api.thecatapi.com/v1/breeds';

export const getBreedNames = async () => {
  const result = await axios.get<Breed[]>(`${breedApiUrl}`);
  return result.data.map(({ id, name }) => ({ id, name } as SimpleBreed));
};

export const getBreed = async (id: string) => {
  const result = await axios.get(`${breedApiUrl}/${id}`);
  return result.data as Breed;
};

export default {};
