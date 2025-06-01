import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import BreedCard from '../../components/Main/BreedCard';

export default function Favoritos() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <p className="text-center mt-14">
        Nenhuma raça favoritada ainda.
      </p>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-12">
      <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#b87de8' }}>
        Raças Favoritas
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {favorites.map(breed => (
          <BreedCard key={breed} breed={breed} />
        ))}
      </div>
    </div>
  );
}
