import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import ComponentFunction from './Components/ComponentFunction';
import ReactExpression from './ReactExpression';
import Cfunction from './Components/Cfunction';
import Movie from './Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ComponentFunction/>
    <ReactExpression/>
    <Cfunction />
    <Movie />
   
  </React.StrictMode>
);

