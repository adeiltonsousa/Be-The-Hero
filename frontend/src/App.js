import React, { useState, setState } from 'react';

import Header from './Header';

function App() {

  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <span>Contador: {counter}</span>
      <button onClick={handleAdd}>Incrementar</button>
    </div>
  );
}

export default App;
