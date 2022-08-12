import { useEffect, useState } from 'react';

const getDefaultName = (key, defaultValue) => {
  return JSON.parse(localStorage.getItem(key)) || defaultValue;
};

const Hello = ({ key, defaultValue }) => {
  const [name, setName] = useState(() => getDefaultName(key, defaultValue));

  useEffect(() => {
    // console.log('Set item in localStorage');
    localStorage.setItem(key, JSON.stringify(name));
  }, [key, name]);

  return (
    <div>
      Name
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
