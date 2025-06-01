import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detalhes = () => {
  const { codigo } = useParams();
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    if (codigo) {
      setImgLoading(true);
      axios
        .get(`https://dog.ceo/api/breed/${codigo}/images`)
        .then((res) => {
          setImages(res.data.message);
          setCurrentIndex(0);
          setImgLoading(false);
        })
        .catch((err) => {
          console.error('Erro ao buscar imagens da raça:', err);
          setImages([]);
          setImgLoading(false);
        });
    }
  }, [codigo]);

  const handleNext = () => {
    setImgLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setImgLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 0) return <p className="text-center mt-10">Carregando imagens...</p>;

  return (
    <div className="container mx-auto p-4 text-center mt-12">
      <h1 className="text-2xl font-bold mb-6 capitalize">{codigo.replace('-', ' ')}</h1>

      <div className="relative w-[600px] h-[400px] mx-auto bg-gray-100 rounded-lg shadow-md">
        {/* Seta esquerda */}
        <button
          onClick={handlePrev}
          aria-label="Imagem anterior"
          className="absolute top-1/2 -left-10 -translate-y-1/2 text-black bg-transparent border-none text-3xl cursor-pointer select-none p-3"
        >
          ‹
        </button>

        {/* Imagem */}
        {imgLoading && (
        <div className="container mx-auto pt-18 px-2 text-center">
            Carregando...
          </div>
        )}
        <img
          src={images[currentIndex]}
          alt={`${codigo} ${currentIndex + 1}`}
          onLoad={() => setImgLoading(false)}
          className={`w-full h-full object-contain rounded-lg ${imgLoading ? 'hidden' : 'block'}`}
        />

        {/* Seta direita */}
        <button
          onClick={handleNext}
          aria-label="Próxima imagem"
          className="absolute top-1/2 -right-10 -translate-y-1/2 text-black bg-transparent border-none text-3xl cursor-pointer select-none p-3"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Detalhes;
