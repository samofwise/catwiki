import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getBreeds } from '../../api/catwiki';
import SimpleBreed from '../../models/SimpleBreed';

export function Home() {
  const navigate = useNavigate();
  const [breeds, setBreeds] = useState<SimpleBreed[]>([]);

  useEffect(() => {
    (async () => {
      setBreeds(await getBreeds());
    })();
  }, []);

  const onBreedSelect = (e: React.SyntheticEvent, id: string) => {
    navigate(`/breeds/${id}`);
  };

  return (
    <>
      <h1>Home</h1>
      <Autocomplete
        options={breeds}
        sx={{ width: 300 }}
        onInputChange={onBreedSelect}
        renderInput={(params) => (
          <TextField {...params} label="Select a breed." />
        )}
        getOptionLabel={(b) => b.id}
        renderOption={(props, b) => <span {...props}>{b.name}</span>}
      />
    </>
  );
}

export default Home;
