export const SimpleUserForm = ({ onSubmit }) => {
  return (
    <form
      className="simple-login-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.target.username.value, e.target.password.value);
      }}
    >
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};
