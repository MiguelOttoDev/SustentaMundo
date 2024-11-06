import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import CampoImg from '../../imgs/Campo.png';
import LogoImg from '../../imgs/Logo.png';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState('Padrão');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    if (!username || !password || !email) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    navigate('/'); // Navega para a página inicial após registro bem-sucedido
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
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <h2>Senha:</h2>
        <input
          type="password"
          placeholder="Insira a sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <h2>Confirme a senha:</h2>
        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <h2>Email:</h2>
        <input
          type="email"
          placeholder="Insira seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <h2>Tipo de conta</h2>
        <div className={styles.accountType}>
          <label>
            <input type="radio" value="Padrão" checked={accountType === 'Padrão'} onChange={(e) => setAccountType(e.target.value)} />
            Padrão
          </label>
          <label>
            <input type="radio" value="Agricultor" checked={accountType === 'Agricultor'} onChange={(e) => setAccountType(e.target.value)} />
            Agricultor
          </label>
          <label>
            <input type="radio" value="Comunidade" checked={accountType === 'Comunidade'} onChange={(e) => setAccountType(e.target.value)} />
            Comunidade
          </label>
        </div>

        <button className={styles.registerButton} onClick={handleRegister}>Registrar</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={CampoImg} alt="Imagem de um campo" className={styles.backgroundImage} />
      </div>
    </div>
  );
};

export default Register;
