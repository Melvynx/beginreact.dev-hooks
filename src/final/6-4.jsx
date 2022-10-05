import { useState } from 'react';
import { ExpensiveComponent } from '../toolbox/components/ExpensiveComponent.jsx';

const SmallComponentTop = () => {
  return (
    <div
      style={{
        width: 'fit-content',
        padding: 32,
        display: 'grid',
        placeContent: 'center',
        border: '2px solid red',
      }}
    >
      SmallComponentLeft
    </div>
  );
};

const ComponentScrollCounter = ({ children, top }) => {
  const [scroll, setScroll] = useState(0);

  return (
    <div
      style={{ overflowY: 'scroll', height: '500px', paddingTop: '200px' }}
      onScroll={(e) => {
        setScroll(e.target.scrollTop);
      }}
    >
      <div style={{ height: '800px' }}>
        {top}
        <p>Hey, you scroll {scroll}</p>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ComponentScrollCounter top={<SmallComponentTop />}>
      <ExpensiveComponent />
    </ComponentScrollCounter>
  );
};

export default App;
