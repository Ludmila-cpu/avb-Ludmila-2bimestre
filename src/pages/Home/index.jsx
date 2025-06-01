import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreedCard from '../../components/Main/BreedCard';

export default function Home() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        setBreeds(Object.keys(response.data.message));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto p-4 mt-12">
      <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#b87de8' }}>
        Raças de Cachorro
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {breeds.map(breed => (
          <BreedCard key={breed} breed={breed} />
        ))}
      </div>
    </div>
  );
}
