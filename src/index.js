import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDW1vSbf7QYpb7T9Mky6cEV_KRUosOsQbA",
  authDomain: "cart-c668b.firebaseapp.com",
  projectId: "cart-c668b",
  storageBucket: "cart-c668b.appspot.com",
  messagingSenderId: "1030974735334",
  appId: "1:1030974735334:web:a6785079e0adabc22ccc27",
  measurementId: "G-BXYGYXY9EJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render( <App />, document.getElementById('root'));