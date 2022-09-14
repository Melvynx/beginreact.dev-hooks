import { useReducer } from 'react';
import { useOnRenderStyle } from '../toolbox/hooks/useOnRenderStyle.jsx';

const Header = () => {
  const ref = useOnRenderStyle();
  return (
    <header ref={ref}>
      <h1>Header</h1>
      <p>The header of the website !</p>
    </header>
  );
};

const Footer = () => {
  const ref = useOnRenderStyle();
  return (
    <footer ref={ref}>
      <h1>Footer</h1>
      <p>The footer of the website !</p>
    </footer>
  );
};

const Counter = () => {
  const [count, increment] = useReducer((v) => v + 1, 0);

  return <button onClick={() => increment()}>{count}</button>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
};

export default App;
