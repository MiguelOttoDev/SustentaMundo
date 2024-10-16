import './App.css';
import NavBar from './componentes/NavBar';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pag/Home'

function AppRoutes() {
  return (
    <div className="App">
      
    <BrowserRouter>

    <NavBar/>

    
      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/produtos" element={<h1>Produtos</h1>} />
      <Route path="/doacao" element={<h1>Doação</h1>} />
      <Route path="/sobre" element={<h1>Sobre</h1>} />
      <Route path="*" element={<div>Pagina nao encontrada</div>}/>

      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
