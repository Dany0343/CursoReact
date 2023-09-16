// Componentes
export function Greeting() {
    function add(x, y) {
      return x + y;
    }
    let user = {
      firstName: "Oscar",
      lastname: "Bucio",
    };
  
    return <h1>{user.firstName}</h1>
  }