import { useReducer, useRef } from 'react';
import { useOnRenderStyle } from '../toolbox/hooks/useOnRenderStyle.jsx';

const HeaderInput = ({ count }) => {
  return (
    <div>
      <p>A counter in the header ? It's possible : {count}</p>
      <input defaultValue="test" />
    </div>
  );
};

const Header = ({ count }) => {
  const headerRef = useRef();
  useOnRenderStyle(headerRef);

  return (
    <div ref={headerRef}>
      <h2>Header</h2>
      <HeaderInput count={count} />
    </div>
  );
};

const App = () => {
  const [count, increment] = useReducer((v) => v + 1, 0);
  return (
    <div>
      <button onClick={() => increment()}>{count}</button>
      <Header count={count} />
    </div>
  );
};

export default App;
