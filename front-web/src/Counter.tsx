import { useState } from "react";

//funcao que cria componente
function Counter() {

//Estado do componente 
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
//    console.log('Incrementar');
    setCounter(counter + 1);
  }

  const handleDecrease = () => {
//    console.log('Decrementar');
    setCounter(counter - 1);
}

  return (
    <div>
        <button onClick={handleIncrease}>Incrementar</button>
        <button onClick={handleDecrease}>Decrementar </button>
        <h1>Valor do Contador: {counter}</h1>
    </div>
  )
}

export default Counter;