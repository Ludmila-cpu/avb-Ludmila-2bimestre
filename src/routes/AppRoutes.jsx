import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Favoritos from '../pages/Favoritos';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:codigo" element={<Detalhes />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}

export default AppRoutes;
