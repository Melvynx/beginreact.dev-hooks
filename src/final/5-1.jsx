import { useReducer } from "react";

const Counter = () => {
  const [count, increment] = useReducer((value) => value + 1, 0);
  return <button onClick={increment}>{count}</button>;
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
