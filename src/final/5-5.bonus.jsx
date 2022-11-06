import { useReducer } from 'react';

const REDUCER_ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  SET: 'set',
};

// Pas de vidéo correction pour cette exercice !

const reducer = (state, { action, value = 1 }) => {
  switch (action) {
    case REDUCER_ACTIONS.INCREMENT:
      return state + value;
    case REDUCER_ACTIONS.DECREMENT:
      return state - value;
    case REDUCER_ACTIONS.RESET:
      return 0;
    case REDUCER_ACTIONS.SET:
      return value;
    default:
      throw new Error('Unexpected action');
  }
};

const useCounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return [count, dispatch];
};

const Counter = () => {
  const [count, dispatch] = useCounterReducer();

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) =>
          dispatch({
            action: REDUCER_ACTIONS.SET,
            value: Number(e.target.value),
          })
        }
      />

      <button onClick={() => dispatch({ action: REDUCER_ACTIONS.DECREMENT })}>
        -
      </button>
      <button
        onClick={() =>
          dispatch({ action: REDUCER_ACTIONS.DECREMENT, value: 5 })
        }
      >
        -5
      </button>
      <button>{count}</button>
      <button
        onClick={() =>
          dispatch({ action: REDUCER_ACTIONS.INCREMENT, value: 5 })
        }
      >
        + 5
      </button>
      <button onClick={() => dispatch({ action: REDUCER_ACTIONS.INCREMENT })}>
        +
      </button>
      <br />
      <button onClick={() => dispatch({ action: REDUCER_ACTIONS.RESET })}>
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
