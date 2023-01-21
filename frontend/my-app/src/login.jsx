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
        <div className="row">
            <div className="column line">
                <h2>Log In:</h2>
                <p>Please Use Your Credentials to Log In Below</p>
                <form action="submit" method='post'>
                    <input type="text" placeholder="Username" name="username" />
                    <br />
                    <input type="password" placeholder='Password' name="pass" />
                    <button type='submit' id='login_btn'>Log In</button>
                </form>
            </div>
            <div className="column">
            <h2>Sign Up:</h2>
                <p>Please Use Your Credentials to Sign Up Below</p>
                <form action="submit" method='post'>
                    <input type="text" placeholder='Full Name' name="fullName" />
                    <input type="email" placeholder='Email Address' name="email" />
                    <input type="text" placeholder="Username" name="username" />
                    <input type="password" placeholder='Password' name="pass" />
                    <button type='submit' id='signup_btn'>Sign Up</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
