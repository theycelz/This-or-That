// components/Login.js
import '../styles/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { firebaseConfig } from './config';
// ... outros imports e estilos

initializeApp(firebaseConfig);

const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

const emailLoginInput = document.getElementById('emailLogin');
const passwordInput = document.getElementById('password');
const signInButton = document.getElementById('signInButton');
const registerButton = document.getElementById('registerButton');

const loginEmailPassword = async () => {
  const loginEmail = emailLoginInput.value;
  const loginPassword = passwordInput.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
  }
}


const createAccount = async () => {
  const loginEmail = emailLoginInput.value;
  const loginPassword = passwordInput.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
  }
}

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    navigate('/categoryselection');
  };

  return (
    <>
      <div className="Menu">
        <div className="ImgControllers">
          <img src={process.env.PUBLIC_URL + '/4.png'} alt="Tela de suporte em login" />
        </div>
      <div className="LoginMenu">
        <form className="formLogin">
            <h1 className="PS2P Azul BemVindo">Bem-vindo!</h1>
            <p className="Arvo Azul Adentre">Adentre</p>
            <input
              className="textbox"
              type="text"
              autoComplete="Email"
              name="Email"
              placeholder="Digite seu email ou nome de usuário"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="textbox"
              type="password"
              autoComplete="off"
              id="Senha"
              name="Senha"
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="ConfirmationButtons">
              <button className="login-button" type="button" onClick={handleLogin}>
                Login
              </button>
              <button className="register-button" type="button">
                ou se cadastre
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
