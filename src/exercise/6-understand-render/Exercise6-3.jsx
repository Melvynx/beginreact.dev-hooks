import { useReducer } from 'react';
import { useOnRenderStyle } from '../../toolbox/hooks/useOnRenderStyle.jsx';

const Header = ({ count }) => {
  const ref = useOnRenderStyle();

  const HeaderInput = () => {
    return (
      <div>
        <p>A counter in the header ? It's possible : {count}</p>
        <input defaultValue="test" />
      </div>
    );
  };

  return (
    <div ref={ref}>
      <h2>Header</h2>
      <HeaderInput />
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
