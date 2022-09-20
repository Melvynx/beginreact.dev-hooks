import { useEffect, useState } from 'react';

const getInitialName = (key, defaultValue) => {
  const storageItem = localStorage.getItem(key);
  if (!storageItem) {
    return defaultValue;
  }

  return JSON.parse(localStorage.getItem(key));
};

const NAME_KEY = 'name';

const NameInput = ({ defaultValue }) => {
  const [name, setName] = useState(() =>
    getInitialName(NAME_KEY, defaultValue)
  );

  useEffect(() => {
    // console.log('Set item in localStorage');
    localStorage.setItem(NAME_KEY, JSON.stringify(name));
  }, [name]);

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
