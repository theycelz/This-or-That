import React from "react";
import { collection, doc, getDoc } from "firebase/firestore"; 

// Funcao para autenticar usuario
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

  authenticateUser(email, password).then((result) => {
    if (result) {
      // Redireciona apos um login bem sucedido
      console.log('Login bem sucedido. Redirecionando para a página principal...');
    } else {
      // Exibe uma mensagem de erro
      console.log('Falha no login. Verifique suas credenciais.');
    }
  });
});

export default autenticaLogin;