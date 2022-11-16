import { useEffect, useState } from 'react';

const getInitialName = (key, defaultValue) => {
  const storedItem = localStorage.getItem(key);

  if (!storedItem) {
    return defaultValue;
  }

  try {
    return JSON.parse(storedItem);
  } catch (e) {
    localStorage.removeItem(key);
    return defaultValue;
  }
};

const useStickyState = (key, defaultValue) => {
  const [state, setState] = useState(() => getInitialName(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
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

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isResizeIncrement, setIsResizeIncrement] = useState(false);

  useEffect(() => {
    if (isResizeIncrement) {
      return;
    }
    const handleResize = () => {
      setCounter((curr) => curr + 1);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isResizeIncrement]);

  return (
    <>
      <input
        checked={isResizeIncrement}
        onChange={(e) => setIsResizeIncrement(e.target.checked)}
        type="checkbox"
      />
      <button onClick={() => setCounter((curr) => curr + 1)}>{counter}</button>
    </>
  );
};

const App = () => {
  return (
    <div className="vertical-stack">
      <Counter />
      <NameInput defaultValue="" />
    </div>
  );
};

export default App;
