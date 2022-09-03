import React from "react";
import ReactDOM from "react-dom/client";

// Se importan las librerias necesarias, están instaladas en el proyecto y se muestran en el package.json

// Se monta la aplicación

// Referencia del div root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizar en la pagina
// Para interpretar una funcion dentro de HTML
root.render(
  <> {/*Se puede omitir el poner esta etiqueta contenedora con fragment el cual solo es quitar el contenido de las etiquetas*/}
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);

// Componentes
function Greeting() {
  function add(x, y) {
    return x + y;
  }
  let user = {
    firstName: "Oscar",
    lastname: "Bucio",
  };

  return <h1>{user.firstName}</h1>
}
// Para interpretar código es con llaves
// JSX es una combinacion de JS con HTML
// Permite dentro de JS retornar porciones de HTML y se convertirá en js puro
