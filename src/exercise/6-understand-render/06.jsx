import { useReducer } from 'react';
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

const Footer = () => {
  const ref = useOnRenderStyle();
  return (
    <footer ref={ref}>
      <h1>Footer</h1>
      <p>The footer of the website !</p>
    </footer>
  );
};

const App = () => {
  // 🦁 Crée un composant "Counter" et déplace la logique et le bouton dedans.
  const [count, increment] = useReducer((v) => v + 1, 0);

  return (
    <div>
      <Header />
      <button onClick={() => increment()}>{count}</button>
      <Footer />
    </div>
  );
};

export default App;
