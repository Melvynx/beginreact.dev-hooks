import { useState } from "react";

const getDefaultName = (key, defaultValue) => {
  return JSON.parse(localStorage.getItem(key)) || defaultValue;
};

const useStickyState = (key, defaultValue) => {
  const [state, setState] = useState(() => getDefaultName(key, defaultValue));

  const setValue = (value) => {
    if (typeof value === "function") {
      setState((prev) => {
        const newValue = value(prev);
        localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    }
  };

  return [state, setValue];
};

const Hello = ({ key, defaultValue }) => {
  const [name, setName] = useStickyState(key, defaultValue);

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
