import { useState } from 'react';

const useStateHistory = () => {
  const [history, setHistory] = useState([]);

  const addHistory = (value = '-') => {
    setHistory((prev) => [...prev, value]);
  };

  const deleteHistory = (index) => {
    if (typeof index !== 'number') return;

    setHistory((current) => {
      current.splice(index, 1);
      return [...current];
    });
  };

  return { history, addHistory, deleteHistory };
};

const App = () => {
  const [name, setName] = useState('');
  const [isNameReversed, setIsNameReversed] = useState(false);
  const { history, addHistory, deleteHistory } = useStateHistory();

  const handleChange = (event) => {
    setName(event.target.value);
    addHistory(event.target.value);
  };

  return (
    <div className="vertical-stack">
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          checked={isNameReversed}
          // onChange={() => setIsNameReversed((prev) => !prev)}
          onChange={(event) => setIsNameReversed(event.target.checked)}
        />
      </div>
      <Name name={name} isNameReversed={isNameReversed} />
      <ul className="history">
        {history.map((name, index) => (
          <li
            onClick={() => {
              console.log('TEST');
              deleteHistory(index);
            }}
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Name = ({ name, isNameReversed }) => {
  if (!name) {
    return <p>Write your name</p>;
  }

  const computedName = isNameReversed
    ? name.split('').reverse().join('')
    : name;

  return <p>Hello {computedName}</p>;
};

export default App;
