import { useState } from "react";
import styles from "../exercise/4-use-context/Exercise4.module.css";
import { createContext, useContextSelector } from "use-context-selector";

// Fake database
const users = [
  { username: "Admin", password: "Admin", isAdmin: true },
  { username: "User", password: "User", isAdmin: false },
];

// User
const UserContext = createContext({ user: null });

const useUserContext = (selector) => {
  return useContextSelector(UserContext, selector);
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
      alert("Invalid username or password");
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
  const isAdmin = useUserContext((v) => v.user?.isAdmin);
  return (
    <div className={styles.nav}>
      <a href="#">Home</a>
      <a href="#">About</a>
      {isAdmin ? <a href="#">Admin</a> : null}
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
  const user = useUserContext((v) => v.user);
  return <h1>Hello {user?.username}</h1>;
};

const LogoutButton = () => {
  const onLogout = useUserContext((v) => v.onLogout);
  return <button onClick={onLogout}>Logout</button>;
};

const UserForm = () => {
  const onSubmit = useUserContext((v) => v.onSubmit);
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
  const isAdmin = useUserContext((v) => v.user?.isAdmin);
  return (
    <div>
      <button>Like</button>
      <button>Dislike</button>
      {isAdmin ? <button>Delete</button> : null}
    </div>
  );
};

const User = () => {
  const user = useUserContext((v) => v.user);
  return user ? <UserView /> : <UserForm />;
};

export default App;
