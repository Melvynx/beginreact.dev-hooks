import { useEffect, useState } from "react";

const Hello = ({ key, defaultValue }) => {
  const [name, setName] = useState(
    JSON.parse(localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(name));
  });

  return (
    <div>
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="vertical-stack">
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <Hello key="name" defaultValue="" />
    </div>
  );
};

export default App;
