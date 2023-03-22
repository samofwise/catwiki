/* eslint-disable react/jsx-one-expression-per-line */
// eslint-disable-next-line import/no-extraneous-dependencies

import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getBreed } from '../../api/catwiki';
import BreedModel from '../../models/Breed';

function Breed() {
  const { id } = useParams();

  const [breed, setBreed] = useState<BreedModel>({} as BreedModel);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (id) setBreed(await getBreed(id));
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <div>Getting your cat&apos;s de-tails...</div>
  ) : (
    <>
      <NavLink to="/">Back </NavLink>
      <h1>{breed.name}</h1>
      <p>{breed.description}</p>
      <div>
        <span>Temperament: </span>
        {breed.temperament}
      </div>
      <div>
        <span>Origin: </span>
        {breed.origin}
      </div>
      <div>
        <span>Life Span: </span>
        {breed.life_span} years
      </div>
      <div>
        <span>Adaptability: </span>
        {breed.adaptability}/5
      </div>
      <div>
        <span>Affection Level: </span>
        {breed.affection_level}/5
      </div>
      <div>
        <span>Child Friendly: </span>
        {breed.child_friendly}/5
      </div>
      <div>
        <span>Grooming: </span>
        {breed.grooming}/5
      </div>
      <div>
        <span>Intelligence: </span>
        {breed.intelligence}/5
      </div>
      <div>
        <span>Health Issues: </span>
        {breed.health_issues}/5
      </div>
      <div>
        <span>Social Needs: </span>
        {breed.social_needs}/5
      </div>
      <div>
        <span>Stranger Friendly: </span>
        {breed.stranger_friendly}/5
      </div>
    </>
  );
}

export default Breed;
