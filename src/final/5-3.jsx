import { useReducer } from 'react';

const REDUCER_ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

const reducer = (state, action) => {
  switch (action) {
    case REDUCER_ACTIONS.INCREMENT:
      return state + 1;
    case REDUCER_ACTIONS.DECREMENT:
      return state - 1;
    case REDUCER_ACTIONS.RESET:
      return 0;
    default:
      throw new Error('Unexpected action');
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch(REDUCER_ACTIONS.DECREMENT)}>-</button>
      <button>{count}</button>
      <button onClick={() => dispatch(REDUCER_ACTIONS.INCREMENT)}>+</button>
      <br />
      <button onClick={() => dispatch(REDUCER_ACTIONS.RESET)}>RESET</button>
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
