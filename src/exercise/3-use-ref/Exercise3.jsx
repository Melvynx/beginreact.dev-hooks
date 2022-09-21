/* eslint-disable no-unused-vars */ // 🦁 Enlève cette ligne
import { useState } from 'react';

const useDebounce = (callback, time) => {
  // 🦁 Remplace cette variable par un `useRef`
  // 💡 timeout correspond à la référence de notre timeout.
  //   Quand tu fais un setTimeout, il return une valeur que
  //   tu peux clear afin de l'annuler. https://developer.mozilla.org/fr/docs/Web/API/setTimeout#valeur_de_retour
  const timeout = null;

  const onDebounce = (...args) => {
    // 🦁 Annule le timeout https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
    // ℹ️ Cette fonction sera appelée à chaque fois que l'user tape un caractère, on veut donc clear
    //    le dernier timeout pour relancer un nouveau timeout.
    // 🦁 Crée un nouveau timeout https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    //    a la fin il doit appeler la callback avec les arguments et le temps est défini par le paramètre `time`
  };

  return onDebounce;
};

const fetchAgeByName = (name) => {
  return fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json());
};

const App = () => {
  const [result, setResult] = useState(null);

  // 🦁 Wrap la function `onSearch` dans le hooks useDebounce
  // 💡 const onSearch = useDebounce((value) => {...}, 500);
  const onSearch = (value) => {
    fetchAgeByName(value).then((data) => {
      setResult(data);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search bar"
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
      {result ? (
        <div style={{ padding: 16 }}>
          The age for <b>{result.name}</b> is <b>{result.age}</b> and there is{' '}
          <b>{result.count}</b> people with this name.
        </div>
      ) : null}
    </div>
  );
};

export default App;
