import { useReducer } from "react";

const Counter = () => {
  const [count, dispatch] = useReducer((value, action) => {
    switch (action) {
      case "increment":
        return value + 1;
      case "decrement":
        return value - 1;
      default:
        throw new Error("Unexpected state");
    }
  }, 0);
  return (
    <div>
      <button onClick={() => dispatch("increment")}>+</button>
      <button>{count}</button>
      <button onClick={() => dispatch("decrement")}>-</button>
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
