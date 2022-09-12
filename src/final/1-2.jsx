import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  // Nom important, `is` car c'est un boolean.
  const [isNameReversed, setIsNameReversed] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
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
    </div>
  );
};

const Name = ({ name, isNameReversed }) => {
  if (!name) {
    return "Write your name";
  }

  return `Hello ${isNameReversed ? name.split("").reverse().join("") : name}`;
};

export default App;
