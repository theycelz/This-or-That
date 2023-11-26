// components/Login.js
import '../styles/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { firebaseConfig } from './config';
import firebase from 'firebase/app';
import 'firebase/firestore';
// ... outros imports e estilos

initializeApp(firebaseConfig);

const auth = getAuth();

const emailLoginInput = document.getElementById('emailLogin');
const passwordInput = document.getElementById('password');
const signInButton = document.getElementById('signInButton');

function toggleSignIn() {
  if (auth.currentUser) {
    signOut(auth);
  } else {
    const emailLogin = emailLoginInput.value;
    const password = passwordInput.value;
    if (emailLogin.length < 4) {
      alert('Por favor, digite um endereço de email válido.');
      return;
    }
    if (password.length < 4) {
      alert('Por favor, digite uma senha válida.');
      return;
    }
    signInWithEmailAndPassword(auth, email, password).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      signInButton.disabled = false;
    });
  }
  signInButton.disabled = true;
}

function handleSignUp() {
  const emailLogin = emailLoginInput.value;
  const password = passwordInput.value;
  if (emailLogin.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Create user with email and pass.
  createUserWithEmailAndPassword(auth, emailLogin, password).catch(function (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}

/**
 * Sends an email verification to the user.
 */
function sendVerificationEmailToUser() {
  const currentUser = auth.currentUser;

  if (currentUser) {
    sendEmailVerification(currentUser).then(function () {
      alert('Email de verificação enviado.');
    });
  } else {
    console.error('Usuário não está autenticado.');
  }
}

signInButton.addEventListener('click', toggleSignIn, false);
signUpButton.addEventListener('click', handleSignUp, false);
verifyEmailButton.addEventListener('click', sendVerificationEmailToUser, false);

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação...
    async function authenticateUser(email, password) {
      const usersCollection = firebase.firestore().collection('users');
      
      try {
        let querySnapshot = await usersCollection.where('email', '==', email).get();
        // Verifique o usuario
        if (querySnapshot.empty) {
          // Usuario não encontrado
          console.log('Usuário não encontrado.');
          return false;
        }
        // Verifique a senha
        querySnapshot = await usersCollection.where('password', '==', password).get();
        if (querySnapshot.empty) {
          // Usuario sem senha
          console.log('Usuário sem senha encontrado.');
          return false;
        }
    
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
    
        if (userData.password === password) {
          console.log('Login bem-sucedido.');
          return true;
        } else {
          console.log('Senha incorreta.');
          return false;
        }
      } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        return false;
      }
    }

    const emailLogin = document.getElementById('emailLogin');
    const password = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', () => {
      const emailLogin = emailInput.value;
      const password = passwordInput.value;

      authenticateUser(emailLogin, password).then((result) => {
        if (result) {
          // Redireciona apos um login bem sucedido
          console.log('Login bem sucedido. Redirecionando para a página principal...');
        } else {
          // Exibe uma mensagem de erro
          console.log('Falha no login. Verifique suas credenciais.');
        }
      });
  });

    // Após autenticação bem-sucedida, redirecionar para a seleção de categoria
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
