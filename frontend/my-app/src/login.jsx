import './styles/login.css';

function Login() {
  return (
    <div className="App">

      <div className="nav">
        <img src="" alt="" />
        <a href="/">Home</a>
      </div>

      <div className="body">
        <div className="home">
            <h1>Try TherapyAI</h1>
        </div>
        <div className="container">
            <h2>Log In:</h2>
            <p>Please Use Your Credentials to Log In Below</p>
            <form action="submit" method='post'>
                <input type="text" placeholder="Username" name="username" />
                <br />
                <input type="password" placeholder='Password' name="pass" />
                <br />
                <button type='submit' id='login_btn'>Log In</button>
                <br /><br />
                <a href="/signup">Dont Have An Account? Sign Up!</a>
            </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
