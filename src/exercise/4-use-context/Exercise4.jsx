import { useState } from 'react';
import styles from '../../styles/Exercise4.module.css';

// User database
const users = [
  { username: 'Admin', password: 'Admin', isAdmin: true },
  { username: 'User', password: 'User', isAdmin: false },
];

// 🦁 Crée un context `UserContext`
// 💡 const UserContext = React.createContext({ currentUser: null });

// 🦁 Crée une fonction `useUserContext` qui return le context
// 💡 const context = useContext(UserContext);

// App
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const onSubmit = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUser(user);
    } else {
      alert('Invalid username or password');
    }
  };

  const onLogout = () => {
    setCurrentUser(null);
  };

  return (
    // 🦁 Wrap la div avec `UserContext.Provider` et ajoute : `currentUser`, `onSubmit` et `onLogout`
    // 🦁 Puis tu peux supprimer toutes les props `currentUser={currentUser}` etc...
    <div className={styles.app}>
      <NavBar currentUser={currentUser} />

      {currentUser ? (
        <UserView user={currentUser} onLogout={onLogout} />
      ) : (
        <UserForm onSubmit={onSubmit} />
      )}

      <Article currentUser={currentUser} />
    </div>
  );
};

// Components
const NavBar = ({ currentUser }) => {
  // 🦁 Supprime la props et remplace en utilisant le context
  // 💡 const { currentUser } = useContext(UserContext);
  return (
    <div className={styles.nav}>
      <a href="#">Home</a>
      <a href="#">About</a>
      {currentUser?.isAdmin ? <a href="#">Admin</a> : null}
    </div>
  );
};

const UserView = ({ user, onLogout }) => {
  // 🦁 Supprime totalement les props et les paramètres
  return (
    <div>
      <HelloUser currentUser={user} />
      <LogoutButton onLogout={onLogout} />
    </div>
  );
};

const HelloUser = ({ currentUser }) => {
  // 🦁 Comme dans `NavBar`
  return <h1>Hello {currentUser?.username}</h1>;
};

const LogoutButton = ({ onLogout }) => {
  // 🦁 Comme dans `NavBar`
  return <button onClick={onLogout}>Logout</button>;
};

const UserForm = ({ onSubmit }) => {
  // 🦁 Comme dans `NavBar`
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

const Article = ({ currentUser }) => {
  // 🦁 Supprime totalement le paramètre
  return (
    <article>
      <h2>Some articles...</h2>
      <p>There is the content</p>
      <ArticleAction user={currentUser} />
    </article>
  );
};

const ArticleAction = ({ user }) => {
  // 🦁 Comment dans `NavBar`
  return (
    <div>
      <button>Like</button>
      <button>Dislike</button>
      {user?.isAdmin ? <button>Delete</button> : null}
    </div>
  );
};

export default App;
