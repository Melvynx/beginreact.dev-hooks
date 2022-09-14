import { useState } from 'react';
import { useOnRenderStyle } from '../toolbox/hooks/useOnRenderStyle.jsx';
import { ExpensiveComponent } from '../toolbox/components/ExpensiveComponent.jsx';

const SmallComponentTop = () => {
  const ref = useOnRenderStyle();
  return (
    <div ref={ref} style={{ width: '100px', height: '100px' }}>
      SmallComponentLeft
    </div>
  );
};

const ComponentScrollCounter = ({ children, topChildren }) => {
  const [scroll, setScroll] = useState(0);

  return (
    <div
      style={{ overflowY: 'scroll', height: '500px', paddingTop: '200px' }}
      onScroll={(e) => {
        setScroll(e.target.scrollTop);
      }}
    >
      <div style={{ height: '800px' }}>
        {topChildren}
        <p>Hey, you scroll {scroll}</p>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ComponentScrollCounter topChildren={<SmallComponentTop />}>
      <ExpensiveComponent />
    </ComponentScrollCounter>
  );
};

export default App;
