import axios from 'axios';
import Breed from '../models/Breed';
import SimpleBreed from '../models/SimpleBreed';

// eslint-disable-next-line no-restricted-globals
const baseUrl = location.hostname === 'localhost' ? 'http://localhost:3001' : 'http://catwiki-env.eba-gfhvgi9j.ap-southeast-2.elasticbeanstalk.com';

export const getBreeds = async () => {
  const result = await axios.get<SimpleBreed[]>(`${baseUrl}/breeds`);
  return result.data;
};

export const getBreed = async (id: string) => {
  const result = await axios.get<Breed>(`${baseUrl}/breeds/${id}`);
  return result.data;
};
