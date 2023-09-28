import { useState } from 'react';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [data, setData] = useState({ username: '', password: '' });

  function handleSubmitForm(event) {
    event.preventDefault();
    // const userData = {
    //   username,
    //   password,
    // };
    console.log(data);
    alert(JSON.stringify(data));
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmitForm}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            // name="username" in controlled input name unnessesary
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            // name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;

// OR
function Login222() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleSubmitForm(event) {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmitForm}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
            // name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
