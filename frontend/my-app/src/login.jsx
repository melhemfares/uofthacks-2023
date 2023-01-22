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

    fetch('http://localhost:3000/api/v1/auth/login', {
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
            {/* <form action="submit" method='post'> */}
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Username" name="username"
                onClick={e => {
                  console.log(e.target.value);
                  this.setState({ username: e.target.value })
                }
                }
              />
              <br />
              <input type="password" placeholder='Password' name="pass"
                onClick={e => this.setState({ pass: e.target.value })}
              />
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

}
