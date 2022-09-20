import { useState } from 'react';

const getInitialName = (key, defaultValue) => {
  return JSON.parse(localStorage.getItem(key)) || defaultValue;
};

const useStickyState = (key, defaultValue) => {
  const [state, setState] = useState(() => getInitialName(key, defaultValue));

  const setValue = (newValue) => {
    // J'undo ce changement pour la suite !
    if (typeof newValue === 'function') {
      setState((prev) => {
        const computedNewValue = computedNewValue(prev);
        localStorage.setItem(key, JSON.stringify(computedNewValue));
        return computedNewValue;
      });
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
      setState(newValue);
    }
  };

  return [state, setValue];
};

const NAME_KEY = 'name';

const NameInput = ({ defaultValue }) => {
  const [name, setName] = useStickyState(NAME_KEY, defaultValue);

  return (
    <label className="textfield">
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="vertical-stack">
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <NameInput defaultValue="" />
    </div>
  );
};

export default App;
