import { useState } from 'react';
import { useOnRenderStyle } from '../../toolbox/hooks/useOnRenderStyle.jsx';
import { ExpensiveComponent } from '../../toolbox/components/ExpensiveComponent.jsx';

const SmallComponentTop = () => {
  const ref = useOnRenderStyle();
  return (
    <div ref={ref} style={{ width: '100px', height: '100px' }}>
      SmallComponentLeft
    </div>
  );
};

const App = () => {
  const [scroll, setScroll] = useState(0);
  return (
    <div
      style={{ overflowY: 'scroll', height: '500px', paddingTop: '200px' }}
      onScroll={(e) => {
        setScroll(e.target.scrollTop);
      }}
    >
      <div style={{ height: '800px' }}>
        <SmallComponentTop />
        <p>Hey, you scroll {scroll}</p>
        <ExpensiveComponent />
      </div>
    </div>
  );
};

export default App;
