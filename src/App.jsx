// src/App.jsx
import { BrowserRouter } from 'react-router-dom'; // Importando BrowserRouter
import Navbar from './components/Navbar';  // Importando a Navbar
import AppRoutes from './routes/AppRoutes';  // Importando as rotas da aplicação

function App() {
  return (
    <BrowserRouter> {/* Envolvendo a aplicação com o BrowserRouter */}
      <Navbar />  {/* Navbar vai aparecer em todas as páginas */}
      <AppRoutes />  {/* As rotas da aplicação */}
    </BrowserRouter>
  );
}

export default App;
