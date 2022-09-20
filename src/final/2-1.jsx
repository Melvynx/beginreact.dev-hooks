import { useEffect, useState } from 'react';

const NAME_KEY = 'name';

const NameInput = ({ defaultValue }) => {
  const [name, setName] = useState(
    localStorage.getItem(NAME_KEY)
      ? JSON.parse(localStorage.getItem(NAME_KEY))
      : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(NAME_KEY, JSON.stringify(name));
  });

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
