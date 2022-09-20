import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { SimpleUserForm } from '../toolbox/components/SimpleUserForm';

// Fake database
const users = [
  { username: 'Admin', password: 'Admin', isAdmin: true },
  { username: 'User', password: 'User', isAdmin: false },
];

// User
const UserContext = createContext({ user: null });
const UserManagerContext = createContext({});

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

const useUserManagerContext = () => {
  const context = useContext(UserManagerContext);
  if (context === undefined) {
    throw new Error(
      'useUpdateUserContext must be used within a UpdateUserContextProvider'
    );
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const onSubmit = useCallback((username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      alert('Invalid username or password');
      return;
    }
    setUser(user);
  }, []);

  const onLogout = useCallback(() => {
    setUser(null);
  }, []);

  const updateUsername = useCallback((username) => {
    setUser((user) => ({ ...user, username }));
  }, []);

  const values = useMemo(() => {
    return { onLogout, onSubmit, updateUsername };
  }, [onLogout, onSubmit, updateUsername]);

  return (
    <UserContext.Provider value={{ user }}>
      <UserManagerContext.Provider value={values}>
        {children}
      </UserManagerContext.Provider>
    </UserContext.Provider>
  );
};

const App = () => {
  return (
    <UserContextProvider>
      <div className="simple-login-app">
        <NavBar />
        <hr />
        <User />
      </div>
    </UserContextProvider>
  );
};

// Components
const NavBar = () => {
  const { user } = useUserContext();
  return (
    <div className="simple-login-nav">
      <a href="#">Home</a>
      <a href="#">About</a>
      {user?.isAdmin ? <a href="#">Admin</a> : null}
      <Logout />
    </div>
  );
};

const HelloUser = () => {
  const { user } = useUserContext();
  const { updateUsername } = useUserManagerContext();
  return (
    <h1>
      Hello{' '}
      <input
        type="text"
        onChange={(e) => updateUsername(e.target.value)}
        value={user?.username ?? ''}
      />
    </h1>
  );
};

const Logout = () => {
  const { onLogout } = useUserManagerContext();
  console.log('onLogout', onLogout);
  return <button onClick={onLogout}>Logout</button>;
};

const UserForm = () => {
  const { onSubmit } = useUserManagerContext();
  return (
    <div>
      <h1>Login</h1>
      <SimpleUserForm onSubmit={onSubmit} />
    </div>
  );
};

const User = () => {
  const { user } = useUserContext();
  return user ? <HelloUser /> : <UserForm />;
};

export default App;
