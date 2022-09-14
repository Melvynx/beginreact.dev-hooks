import { createContext, useContext, useState } from 'react';
import styles from '../exercise/4-use-context/Exercise4.module.css';

// Fake database
const users = [
  { username: 'Admin', password: 'Admin', isAdmin: true },
  { username: 'User', password: 'User', isAdmin: false },
];

// User
const UserContext = createContext({ user: null });

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const onSubmit = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setUser(user);
    } else {
      alert('Invalid username or password');
    }
  };

  const onLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, onLogout, onSubmit }}>
      {children}
    </UserContext.Provider>
  );
};

const App = () => {
  return (
    <UserContextProvider>
      <div className={styles.app}>
        <NavBar />
        <User />
        <Article />
      </div>
    </UserContextProvider>
  );
};

// Components
const NavBar = () => {
  const { user } = useUserContext();
  return (
    <div className={styles.nav}>
      <a href="#">Home</a>
      <a href="#">About</a>
      {user?.isAdmin ? <a href="#">Admin</a> : null}
    </div>
  );
};

const UserView = () => {
  return (
    <div>
      <HelloUser />
      <LogoutButton />
    </div>
  );
};

const HelloUser = () => {
  const { user } = useUserContext();
  return <h1>Hello {user?.username}</h1>;
};

const LogoutButton = () => {
  const { onLogout } = useUserContext();
  return <button onClick={onLogout}>Logout</button>;
};

const UserForm = () => {
  const { onSubmit } = useUserContext();
  return (
    <div>
      <h1>Login</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e.target.username.value, e.target.password.value);
        }}
      >
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Article = () => {
  return (
    <article>
      <h2>Some articles...</h2>
      <p>There is the content</p>
      <ArticleAction />
    </article>
  );
};

const ArticleAction = () => {
  const { user } = useUserContext();
  return (
    <div>
      <button>Like</button>
      <button>Dislike</button>
      {user?.isAdmin ? <button>Delete</button> : null}
    </div>
  );
};

const User = () => {
  const { user } = useUserContext();
  return user ? <UserView /> : <UserForm />;
};

export default App;
