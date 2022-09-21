import { useOnRenderStyle } from '../hooks/useOnRenderStyle.jsx';

export const ExpensiveComponent = () => {
  const ref = useOnRenderStyle();

  const generateNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 100; i++) {
      numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
  };
  const generateNumbersLine = () => {
    const numbers = [];
    for (let i = 0; i < 100; i++) {
      numbers.push(generateNumbers());
    }
    return numbers;
  };

  const numbers = generateNumbersLine();

  return (
    <div ref={ref} style={{ width: '500px', overflowX: 'scroll' }}>
      <h1>BigComposant</h1>
      <p>The big composant of the website !</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {numbers.map((numbersLine, index) => (
          <div key={index} style={{ display: 'flex' }}>
            {numbersLine.map((number, index) => (
              <div
                key={index}
                style={{
                  width: 40,
                  height: 40,
                  border: `2px solid rgb(${number}, ${number}, ${number})`,
                }}
              >
                {number}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
