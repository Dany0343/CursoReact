import React from "react";
import ReactDOM from 'react-dom/client';

// Se importan las librerias necesarias, están instaladas en el proyecto y se muestran en el package.json

// Se monta la aplicación

// Referencia del div root
// Forma larga
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement); // Se crea el root

// Forma corta
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar en la pagina
root.render(<h1>Hola mundo desde React!</h1>);


// Componentes en React