import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";

// Se importan las librerias necesarias, están instaladas en el proyecto y se muestran en el package.json

// Se monta la aplicación

// Referencia del div root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizar en la pagina
// Para interpretar una funcion dentro de HTML
root.render(
  <>
    {/*Se puede omitir el poner esta etiqueta contenedora "<div></div>" con fragment el cual solo es quitar el contenido de las etiquetas*/}

    <Button text="Click me"/>
    <Button text="Pay"/>
    <Button text="Go to"/>


    {/* <UserCard
      name="Oscar Bucio"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{
        street: "Calle Olmo",
        city: "CDMX",
      }}
    />

    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33, 22.2]}
      address={{ street: "123 Main", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    /> */}

  </>
);

// Para interpretar código es con llaves
// JSX es una combinacion de JS con HTML
// Permite dentro de JS retornar porciones de HTML y se convertirá en js puro

// Componentes con capital en mayusculas siempre, PascalCase
