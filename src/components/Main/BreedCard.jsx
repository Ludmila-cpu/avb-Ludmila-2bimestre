import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';

export default function BreedCard({ breed }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(breed);

  return (
    <div className="border rounded p-4 shadow-md">
      <Link
        to={`/detalhes/${breed}`}
        className="flex flex-col items-center cursor-pointer"
      >
        <h2 className="capitalize text-lg font-semibold mb-2">{breed}</h2>
      </Link>

      <button
        onClick={() => toggleFavorite(breed)}
        className={`mt-2 px-3 py-1 rounded w-full ${
          isFavorite ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {isFavorite ? '❤️ Favorito' : '♡ Favoritar'}
      </button>
    </div>
  );
}
