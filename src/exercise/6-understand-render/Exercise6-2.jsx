import { useState } from 'react';
import { useOnRenderStyle } from '../../toolbox/hooks/useOnRenderStyle.jsx';

const User = ({ user }) => {
  return (
    <div>
      <Name name={user.name} />
      <Age age={user.age} />
    </div>
  );
};

const Name = ({ name }) => {
  const ref = useOnRenderStyle();
  return (
    <p ref={ref}>
      User's name is <b>{name}</b>
    </p>
  );
};

const Age = ({ age }) => {
  const ref = useOnRenderStyle();
  return (
    <p ref={ref}>
      User have <b>{age}</b> years old.
    </p>
  );
};

const App = () => {
  const [user, setUser] = useState({ name: 'Jean', age: '14' });

  return (
    <div>
      <form className="vertical-stack">
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
      </form>
      <User user={user} />
    </div>
  );
};

export default App;
