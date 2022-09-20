import { createContext, memo, useContext, useReducer, useState } from 'react';
import { useOnRenderStyle } from '../../toolbox/hooks/useOnRenderStyle.jsx';

const Header = () => {
  const ref = useOnRenderStyle();
  return (
    <header ref={ref}>
      <h1>Header</h1>
      <p>The header of the website !</p>
    </header>
  );
};
const HeaderMemo = memo(Header);

const IncrementButton = () => {
  const [count, setCount] = useContext(CounterContext);
  const ref = useOnRenderStyle();
  return (
    <button ref={ref} onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
const IncrementCounterMemo = memo(IncrementButton);

const CounterDisplay = () => {
  const [count] = useContext(CounterContext);

  const ref = useOnRenderStyle();
  return <p ref={ref}>{count}</p>;
};
const CounterDisplayMemo = memo(CounterDisplay);

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {children}
    </CounterContext.Provider>
  );
};

const App = () => {
  const [count, increment] = useReducer((v) => v + 1, 0);
  return (
    <>
      <button onClick={() => increment()}>Rerender App {count}</button>
      <CounterProvider>
        <HeaderMemo />
        <CounterDisplayMemo />
        <IncrementCounterMemo />
      </CounterProvider>
    </>
  );
};

export default App;
