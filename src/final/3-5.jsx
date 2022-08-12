import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmitUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="vertical-stack" onSubmit={handleSubmit(onSubmitUser)}>
      <label htmlFor="name">
        Name
        <input {...register('username')} id="name" type="text" name="name" />
      </label>
      <label htmlFor="password">
        Password
        <input
          {...register('password', { minLength: 8 })}
          id="password"
          type="password"
          name="password"
        />
      </label>
      {errors.password && (
        <p style={{ color: '#e74c3c' }}>
          Password must be at least 8 characters long
        </p>
      )}
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
