import { useState } from "react";
import styles from "./Exercise4.module.css";

// User database
const users = [
  { username: "Admin", password: "Admin", isAdmin: true },
  { username: "User", password: "User", isAdmin: false },
];

const NavBar = ({ user }) => {
  return (
    <div className={styles.nav}>
      <a href="#">Home</a>
      <a href="#">About</a>
      {user?.isAdmin ? <a href="#">Admin</a> : null}
    </div>
  );
};

const UserView = ({ user, onLogout }) => {
  return (
    <div>
      <HelloUser user={user} />
      <LogoutButton onLogout={onLogout} />
    </div>
  );
};

const HelloUser = ({ user }) => {
  return <h1>Hello {user?.username}</h1>;
};

const LogoutButton = ({ onLogout }) => {
  return <button onClick={onLogout}>Logout</button>;
};

const UserForm = ({ onSubmit }) => {
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

const Article = ({ user }) => {
  return (
    <article>
      <h2>Some articles...</h2>
      <p>There is the content</p>
      <ArticleAction user={user} />
    </article>
  );
};

const ArticleAction = ({ user }) => {
  return (
    <div>
      <button>Like</button>
      <button>Dislike</button>
      {user?.isAdmin ? <button>Delete</button> : null}
    </div>
  );
};

const App = () => {
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

  return (
    <div className={styles.app}>
      <NavBar user={user} />

      {user ? (
        <UserView user={user} onLogout={() => setUser(null)} />
      ) : (
        <UserForm onSubmit={onSubmit} />
      )}

      <Article user={user} />
    </div>
  );
};

export default App;
