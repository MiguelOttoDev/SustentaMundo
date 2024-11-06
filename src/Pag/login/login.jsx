import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import CampoImg from '../../imgs/Campo.png';
import LogoImg from '../../imgs/Logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    navigate('/'); // Navega para a página raiz após login bem-sucedido
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <img src={LogoImg} alt="Logo SustentaMundo" className={styles.logo} />
        <h2>Usuário:</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className={styles.input}  // Adicionando className específico
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <h2>Senha:</h2>
        <input
          type="password"
          placeholder="Digite a sua senha:"
          value={password}
          className={styles.input}  // Adicionando className específico
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <p className={styles.registerText} onClick={() => navigate('/register')}>Cadastre-se</p> {/* Link para página de registro */}
        <button className={styles.loginButton} onClick={handleLogin}>Entrar</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={CampoImg} alt="Imagem de um campo" className={styles.backgroundImage} />
      </div>
    </div>
  );
};

export default Login;
