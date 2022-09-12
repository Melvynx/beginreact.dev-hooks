// 🦁 Ajout l'import de useEffect
import { useState } from "react";

// 🦁 Ajoute une props `key`
const Hello = ({ defaultValue }) => {
  // 🦁 Change la valeur par défaut en récupérant la valeur stockée dans le localStorage
  // 💡 JSON.parse(localStorage.getItem(key))
  // Si il est vide, on retourne la valeur par défaut
  const [name, setName] = useState(defaultValue);

  // 🦁 Dans un `useEffect` update la valeur stockée dans le localStorage.
  // 💡 localStorage.setItem(key, JSON.stringify(name));

  return (
    <div>
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="vertical-stack">
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>

      <Hello
        defaultValue=""
        // 🦁 Rajoute la props `key` avec la valeur `name`
      />
    </div>
  );
};

export default App;
