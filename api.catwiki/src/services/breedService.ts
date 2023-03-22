import { getBreed, getBreedNames } from '../apis/breedApi';

export const getBreeds = () => getBreedNames();

export const getBreedInfo = async (id: string) => {
  const breed = await getBreed(id);
  return breed;
};

export default {};
