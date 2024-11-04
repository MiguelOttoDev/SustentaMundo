import './App.css';
import NavBar from './componentes/NavBar';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pag/Home';
import Produtos from './Pag/produtos/produtos.jsx';
import { SmcProvider } from './context/smcContext.jsx';
import Doacao from './Pag/doacao/doacao.jsx';

function AppRoutes() {
  return (
    <div className="App">
      <SmcProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/sobre" element={<h1>Sobre</h1>} />
            <Route path="*" element={<div>Pagina nao encontrada</div>} />
          </Routes>
        </BrowserRouter>
      </SmcProvider>
    </div>
  );
}

export default AppRoutes;
