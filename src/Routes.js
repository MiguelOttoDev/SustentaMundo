import './App.css';
import NavBar from './componentes/NavBar';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pag/Home';
import Produtos from './Pag/produtos/produtos.jsx';
import { SmcProvider } from './context/smcContext.jsx';
import Doacao from './Pag/doacao/doacao.jsx';
import Login from './Pag/login/login.jsx';  // Novo import
import Register from './Pag/register/register.jsx';  // Novo import
import SmcScreen from './Pag/smc/smc.jsx';
import Sobre from './Pag/sobre/sobre.jsx';
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
            <Route path="/login" element={<Login />} />  {/* Nova rota */}
            <Route path="/register" element={<Register />} />  {/* Nova rota */}
            <Route path="/smc" element={<SmcScreen />} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="*" element={<div>Pagina nao encontrada</div>} />
          </Routes>
        </BrowserRouter>
      </SmcProvider>
    </div>
  );
}

export default AppRoutes;
