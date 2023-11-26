// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49W70RoMrCBfrBvogHZRXA3LPzohHm50",
  authDomain: "this-or-that-pw-b447d.firebaseapp.com",
  projectId: "this-or-that-pw-b447d",
  storageBucket: "this-or-that-pw-b447d.appspot.com",
  messagingSenderId: "512329130506",
  appId: "1:512329130506:web:c4a295068aaf11fab975f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };