import { useReducer } from 'react';

const reducer = (value, action) => {
  switch (action) {
    case 'increment':
      return value + 1;
    case 'decrement':
      return value - 1;
    default:
      throw new Error('Unexpected state');
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button>{count}</button>
      <button onClick={() => dispatch('increment')}>+</button>
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
