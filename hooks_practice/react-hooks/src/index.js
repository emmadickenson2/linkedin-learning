import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const [, , third] = ["Emma", "Emily", "Alan"]

console.log(third)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Emma" />
  </React.StrictMode>
);
