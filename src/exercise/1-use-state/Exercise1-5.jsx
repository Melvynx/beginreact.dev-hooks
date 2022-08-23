import { useState } from "react";

const Todos = ({ todos }) => (
  <div>
    {todos.map((todo, i) => (
      <div key={i}>{todo}</div>
    ))}
  </div>
);

const TodoForm = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = e.target.todo.value;

    addTodo(todo);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add</button>
    </form>
  );
};

const Counter = ({ count, increment }) => {
  return <button onClick={increment}>{count}</button>;
};

const Username = ({ username, setUsername }) => {
  return (
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  );
};

const Greeting = ({ favoriteAnimal, username }) => {
  return (
    <p>
      <b>{username}</b>'s favorite animal is <b>{favoriteAnimal}</b>
    </p>
  );
};

// 🦁 Il faudra ajouter les props "favoriteAnimal" et "setFavoriteAnimal" ici !
const FavoriteAnimal = () => {
  // 🦁 Déplace se state dans le composant "UserAnimalForm".
  // Tu dois déplacer se state, car c'est un composant aux dessus qui a besoin
  // De cette donnée.
  const [favoriteAnimal, setFavoriteAnimal] = useState("Dog");
  return (
    <input
      type="text"
      value={favoriteAnimal}
      onChange={(e) => setFavoriteAnimal(e.target.value)}
    />
  );
};

// 🦁 Crée un nouveau composant nommé : "UserAnimalForm".
// Dedans tu vas avoir toute la logique par rapport à la phrase concernant
// le username et le favorite animal.

const App = () => {
  const [todos, setTodos] = useState(["Learn React", "Learn React Hooks"]);
  const [count, setCount] = useState(0);
  // 🦁 Déplace ce state dans le composant "UserAnimalForm".
  const [username, setUsername] = useState("");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h2>TodoApp</h2>
      <Todos todos={todos} />
      <TodoForm addTodo={addTodo} />
      <h2>Counter</h2>
      <Counter count={count} increment={() => setCount((p) => p + 1)} />
      {/* 🦁 Déplace toute cette partie dans "UserAnimalForm" */}
      <div className="vertical-stack">
        <h2>Animal !</h2>
        <div>
          <span>Favorite Animal</span>
          <FavoriteAnimal />
        </div>
        <div>
          <span>Username</span>
          <Username username={username} setUsername={setUsername} />
        </div>
        <Greeting username={username} />
      </div>
    </div>
  );
};

export default App;
