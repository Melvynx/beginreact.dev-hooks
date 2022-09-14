import { useReducer } from 'react';

const reducer = (value, action) => {
  return value + 1;
};

const Counter = () => {
  // 🦁 Remplace ceci par un useReducer avec `reducer` en paramètre et `0` en initialState
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button>{count}</button>
      {/* 🦁 Ajoute un `onClick` qui appel la fonction dispatch de notre reducer */}
      <button onClick={dispatch}>+</button>
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
