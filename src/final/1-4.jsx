import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [isNameReversed, setIsNameReversed] = useState(false);
  const [nameHistory, setNameHistory] = useState([]);

  const onSubmit = (event) => {
    setName(event.target.value);
    setNameHistory([...nameHistory, event.target.value || '-']);
  };

  const deleteHistory = (index) => {
    // setNameHistory(previous => previous.filter((_, i) => i !== index));
    setNameHistory((previous) => {
      previous.splice(index, 1);
      return [...previous];
    });
  };

  return (
    <div className="vertical-stack">
      <div>
        <input type="text" placeholder="Name" value={name} onChange={onSubmit} />
        <input
          type="checkbox"
          checked={isNameReversed}
          // onChange={() => setIsNameReversed((prev) => !prev)}
          onChange={(event) => setIsNameReversed(event.target.checked)}
        />
      </div>
      <Name name={name} isNameReversed={isNameReversed} />
      <ul style={{ textAlign: 'left' }}>
        {nameHistory.map((name, index) => (
          <li onClick={() => deleteHistory(index)} key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Name = ({ name, isNameReversed }) => {
  if (!name) {
    return 'Write your name';
  }

  return `Hello ${isNameReversed ? name.split('').reverse().join('') : name}`;
};

export default App;
