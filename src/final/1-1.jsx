import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <p>{name ? `Hello ${name}` : 'Write your name'}</p>
    </div>
  );
};

export default App;
