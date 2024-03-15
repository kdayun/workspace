import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



import ProfileCard from './chapter13/profileCard';
import Calculator from './chapter12/calculator';
import WelcomeDialog from './chapter13/welcomedialog';
import FancyBorder from './chapter13/fancyborder';
import Card from './chapter13/card';
import DarkOrLight from './chapter14/DarkOrLight';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <DarkOrLight />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


