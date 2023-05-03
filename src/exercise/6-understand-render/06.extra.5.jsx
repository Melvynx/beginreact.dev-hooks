import { useReducer, useState } from 'react';

const generatePrime = (n) => {
  if (n > 90000) {
    n = 90000;
  }

  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
};

const PrimeNumber = ({ index, number }) => {
  return (
    <li>
      {index}: <b>{number}</b>
    </li>
  );
};

// 🦁 Crée PrimeNumberMemo afin de ne pas render PrimeNumber à chaque fois
//    qu'un élément de la liste change.
// 💡 const PrimeNumberMemo = ...
export const PrimeNumbers = () => {
  const [max, setMax] = useState(10000);
  // 🦁 Utilise useMemo avec `max` comme dépendance afin de ne pas recalculer les nombres
  //    premiers à chaque render
  const primes = generatePrime(max);

  return (
    <div>
      <h2>Primes numbers</h2>
      <input
        type="number"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
      <ul className="grid-prime-number">
        {primes.map((prime, index) => (
          <PrimeNumber key={prime} index={index} number={prime} />
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [count, increment] = useReducer((v) => v + 1, 0);

  return (
    <div>
      <button onClick={() => increment()}>{count}</button>
      <PrimeNumbers />
    </div>
  );
};

export default App;
