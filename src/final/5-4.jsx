import { useReducer } from 'react';

const CountReducerAction = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

const useCounterReducer = () => {
  const reducer = (state, { action, value = 1 }) => {
    switch (action) {
      case CountReducerAction.INCREMENT:
        return state + value;
      case CountReducerAction.DECREMENT:
        return state - value;
      case CountReducerAction.RESET:
        return 0;
      default:
        throw new Error('Unexpected action');
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return [count, dispatch];
};

const Counter = () => {
  const [count, dispatch] = useCounterReducer();

  return (
    <div>
      <button
        onClick={() => dispatch({ action: CountReducerAction.DECREMENT })}
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch({ action: CountReducerAction.DECREMENT, value: 5 })
        }
      >
        -5
      </button>
      <button>{count}</button>
      <button
        onClick={() =>
          dispatch({ action: CountReducerAction.INCREMENT, value: 5 })
        }
      >
        + 5
      </button>
      <button
        onClick={() => dispatch({ action: CountReducerAction.INCREMENT })}
      >
        +
      </button>
      <br />
      <button onClick={() => dispatch({ action: CountReducerAction.RESET })}>
        RESET
      </button>
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
