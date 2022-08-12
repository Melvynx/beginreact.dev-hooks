const UserForm = ({ onSubmitUser }) => {
  // 🦁 Crée une fonction handleSubmit qui prend `event` en paramètre.
  // Récupère ensuite les deux données du formulaire (name et password)
  // Pour ça tu peux t'aidé en loggant dans la console `event.target` et en cherchant les propriétés name et password.

  // 🦁 Appel la fonction `onSubmitUser` avec les deux données du formulaire dans un object
  // 💡 onSubmitUser({ name, password })

  return (
    // 🦁 ajoute onSubmit en passant la fonction handleSubmit
    <form className="vertical-stack">
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

const Form = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;
