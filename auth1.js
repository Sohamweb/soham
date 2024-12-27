import firebase from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAocSYGZJ7iYqiOd1rEEJMRD53kWE01yzE",
  authDomain: "sohamtoursandtravels-b77c1.firebaseapp.com",
  projectId: "sohamtoursandtravels-b77c1",
  storageBucket: "sohamtoursandtravels-b77c1.firebasestorage.app",
  messagingSenderId: "785941989939",
  appId: "1:785941989939:web:3b5a81b8cfe23e4d88b146"
};

export const auth = firebaseApp.auth()
export const db = firebaseApp.firestore()
export default firebaseApp

const register = document.getElementById("Register");

register.addEventListener('click', function(event) { // Corrected function syntax
  event.preventDefault();

  // Input fields
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("register-pass").value;


  // Input validation
  if (!username || !email || !password) {
    alert("All fields are required!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

//login
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });