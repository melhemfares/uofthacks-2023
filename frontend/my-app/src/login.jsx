import React, { Component } from 'react'
import './styles/login.css';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, pass } = this.state;
    console.log(username, pass);

    fetch('http://localhost:5000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: pass
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">

        <div className="nav">
        <img style={{marginRight:"950px"}} className="nav-logo" src="https://cdn-icons-png.flaticon.com/512/5659/5659645.png" alt="logo" />
          <a href="/">Home</a>
        </div>

        <div className="body">
          <div className="home">
            <h1>Try TherapyAI</h1>
          </div>
          <div className="container">
            <h2>Log In:</h2>
            <p>Please Use Your Credentials to Log In Below</p>
            {/* <form action="submit" method='post'> */}
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Username" name="username"
                onChange={e => this.setState({ username: e.target.value })}
              />
              <br />
              <input type="password" placeholder='Password' name="pass"
                onChange={e => this.setState({ pass: e.target.value })}
              />
              <br /> <br />
              <a href="/chat" id='login_btn'>Log In</a>
              <br /><br />
              <a href="/signup">Dont Have An Account? Sign Up!</a>
            </form>

          </div>
        </div>
      </div>
    );
  }

}
