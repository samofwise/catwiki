import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBreed } from '../../api/catwiki';

function Breed() {
  const { id } = useParams();

  const [breed, setBreed] = useState<Breed>({});

  useEffect(() => {
    (async () => {
      if (id) setBreed(await getBreed(id));
    })();
  }, []);

  return <div>{}</div>;
}

export default Breed;
