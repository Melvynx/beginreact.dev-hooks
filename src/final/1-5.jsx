import { useState } from 'react';

const Todos = ({ todos }) => (
  <ul>
    {todos.map((todo, i) => (
      <li key={i}>{todo}</li>
    ))}
  </ul>
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

const FavoriteAnimal = ({ favoriteAnimal, setFavoriteAnimal }) => {
  return (
    <input
      type="text"
      value={favoriteAnimal}
      onChange={(e) => setFavoriteAnimal(e.target.value)}
    />
  );
};

const UserAnimalForm = () => {
  const [username, setUsername] = useState('');
  const [favoriteAnimal, setFavoriteAnimal] = useState('Dog');

  return (
    <div className="vertical-stack">
      <h2>Animal !</h2>
      <div>
        <span>Favorite Animal</span>
        <FavoriteAnimal
          favoriteAnimal={favoriteAnimal}
          setFavoriteAnimal={setFavoriteAnimal}
        />
      </div>
      <div>
        <span>Username</span>
        <Username username={username} setUsername={setUsername} />
      </div>
      <Greeting username={username} favoriteAnimal={favoriteAnimal} />
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState(['Learn React', 'Learn React Hooks']);
  const [count, setCount] = useState(0);

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
      <UserAnimalForm />
    </div>
  );
};

export default App;
