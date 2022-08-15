import { useReducer } from "react";

const CountReducerAction = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

const useCounterReducer = () => {
  const reducer = (state, action) => {
    switch (action) {
      case CountReducerAction.INCREMENT:
        return state + 1;
      case CountReducerAction.DECREMENT:
        return state - 1;
      case CountReducerAction.RESET:
        return 0;
      default:
        throw new Error("Unexpected action");
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return [count, dispatch];
};

const Counter = () => {
  const [count, dispatch] = useCounterReducer();

  return (
    <div>
      <button onClick={() => dispatch(CountReducerAction.INCREMENT)}>+</button>
      <button>{count}</button>
      <button onClick={() => dispatch(CountReducerAction.DECREMENT)}>-</button>
      <button onClick={() => dispatch(CountReducerAction.RESET)}>RESET</button>
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
