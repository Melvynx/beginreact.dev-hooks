import { useOnRenderStyle } from '../hooks/useOnRenderStyle.jsx';
import { shuffle } from '../shuffleArray.js';

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

export const ExpensiveComponent = () => {
  const ref = useOnRenderStyle();

  const numbers = shuffle(generatePrime(50000));

  return (
    <div ref={ref} style={{ width: '500px', overflowX: 'scroll' }}>
      <h1>BigComposant</h1>
      <p>The big composant of the website !</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {numbers.map((number, index) => (
          <div
            key={index}
            style={{
              width: 40,
              height: 40,
              border: `2px solid rgb(${number / 100}, ${number}, ${number})`,
            }}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};
