import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [isNameReversed, setIsNameReversed] = useState(false);
  const [nameHistory, setNameHistory] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
    setNameHistory((current) => [...current, event.target.value || '-']);
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
        {nameHistory.map((name, index) => (
          <li key={index}>{name}</li>
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
