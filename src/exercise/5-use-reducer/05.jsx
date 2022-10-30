import { useReducer } from 'react';

const reducer = (value, action) => {
  // 🦁 Ici il faut que tu return la valeur incrémenté de 1
};

const Counter = () => {
  // 🦁 Remplace ceci par un useReducer avec `reducer` en paramètre et `0` en initialState
  let count = 0;

  return (
    <div>
      <button>{count}</button>
      {/* 🦁 Ajoute un `onClick` qui appel la fonction dispatch de notre reducer */}
      <button>+</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
