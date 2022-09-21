// 🦁 Ajout l'import de useEffect
import { useState } from 'react';

// 🦁 Crée une variable `NAME_KEY` avec la valeur `name`

const NameInput = ({ defaultValue }) => {
  // 🦁 Change la valeur par défaut en récupérant la valeur stockée dans le localStorage
  // 💡 JSON.parse(localStorage.getItem(key))
  // 🦁 Attention il faut vérifier que localStorage.getItem(key) n'est pas null sinon tu vas avoir une erreur !
  // Si il est vide, tu peux utiliser la valeur par défaut
  const [name, setName] = useState(defaultValue);

  // 🦁 Dans un `useEffect` update la valeur stockée dans le localStorage.
  // 💡 localStorage.setItem(key, JSON.stringify(name));

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
