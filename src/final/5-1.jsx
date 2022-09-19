import { useReducer } from 'react';

const reducer = (value, action) => {
  return value + 1;
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button>{count}</button>
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
