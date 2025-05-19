import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        // response.data.message é um objeto com as raças como chaves
        setBreeds(Object.keys(response.data.message));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1
        className="text-3xl font-bold text-center mb-8"
        style={{ color: '#b87de8' }}
      >
        Raças de Cachorro
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {breeds.map(breed => (
          <Link
            key={breed}
            to={`/detalhes/${breed}`}
            className="bg-white shadow rounded p-4 text-center hover:bg-pink-100 transition"
          >
            <h2 className="capitalize text-lg font-semibold">{breed}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
