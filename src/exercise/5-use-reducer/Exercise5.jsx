import { useReducer } from "react";

const Counter = () => {
  let count = 0;
  return <button>{count}</button>;
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
