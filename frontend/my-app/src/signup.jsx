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
            <h2>Sign Up:</h2>
                <p>Please Use Your Credentials to Sign Up Below</p>
                <form action="submit" method='post'>
                    <input type="text" placeholder='Full Name' name="fullName" />
                    <input type="email" placeholder='Email Address' name="email" />
                    <input type="text" placeholder="Address" name="address" />
                    <input type="text" placeholder="Username" name="username" />
                    <input type="password" placeholder='Password' name="pass" />
                    <br />
                    <button type='submit' id='login_btn'>Log In</button>
                    <br /><br />
                    <a href="/login">Already Have An Account? Log In!</a>
                </form>
            </div>
        </div>
      </div>
  );
}

export default Login;
