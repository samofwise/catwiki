import axios from 'axios';
import CatImage from '../models/CatImage';

const breedApiUrl = 'https://api.thecatapi.com/v1/images/search';

export const getImageForbreed = async (breedId: string) => {
  const result = await axios.get(`${breedApiUrl}?breed_ids=${breedId}`);
  return result.data as CatImage;
};

export default {};
