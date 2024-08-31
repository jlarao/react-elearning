import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';

import  fire_base from 'firebase';
global.firebase = fire_base;

var firebaseConfig = {
  apiKey: "AIzaSyBvWLD2or3EIuXgxqCvYn3knv9C1f6qE2I",
  authDomain: "react-elearning-e12a6.firebaseapp.com",
  databaseURL: "https://react-elearning-e12a6-default-rtdb.firebaseio.com",
  projectId: "react-elearning-e12a6",
  storageBucket: "react-elearning-e12a6.appspot.com",
  messagingSenderId: "1009605814851",
  appId: "1:1009605814851:web:edd70e4783f2f7509382f6",
  measurementId: "G-ZPK35EGN95"
};
// Initialize Firebase
global.firebase.initializeApp(firebaseConfig);
//firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

