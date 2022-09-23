import { memo, useMemo, useReducer, useState } from 'react';

const generatePrime = (n) => {
  if (n > 60000) {
    n = 60000;
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
  console.log(index);
  return (
    <li>
      {index}: <b>{number}</b>
    </li>
  );
};

const PrimeNumberMemo = memo(PrimeNumber);

export const PrimeNumbers = () => {
  const [max, setMax] = useState(10000);
  const primes = useMemo(() => generatePrime(max), [max]);

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
          <PrimeNumberMemo key={prime} index={index} number={prime} />
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
