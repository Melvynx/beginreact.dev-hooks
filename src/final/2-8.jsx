import { useEffect, useLayoutEffect, useState } from 'react';

const EffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`%c Run Effects ${count}`, 'color: green');

    return () => {
      console.log(`%c Cleanup Effects ${count}`, 'color: red');
    };
  }, [count]);

  useLayoutEffect(() => {
    console.log(
      `%c Run LayoutEffects ${count}`,
      'color: green; background: black'
    );

    return () => {
      console.log(
        `%c Cleanup LayoutEffects ${count}`,
        'color: red; background: black'
      );
    };
  }, [count]);

  useEffect(() => {
    console.log('%c Effect : Only on mount', 'color: cyan');
    return () => {
      console.log('%c Effect : Only on unmount', 'color: red');
    };
  }, []);

  useEffect(() => {
    console.log('%c Run : useEffect on every render', 'color: magenta');
  });

  return (
    <div>
      <button onClick={() => setCount((p) => p + 1)}>
        You clicked {count} times
      </button>
    </div>
  );
};

const App = () => {
  const [mount, setMount] = useState(false);

  return (
    <div>
      <button onClick={() => setMount(true)}>Mount</button>
      <button onClick={() => setMount(false)}>Unmount</button>
      <div style={{ padding: 16 }}>{mount && <EffectExample />}</div>
    </div>
  );
};

export default App;
