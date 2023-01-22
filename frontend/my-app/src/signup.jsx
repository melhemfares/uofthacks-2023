import React, { Component } from 'react';
import './styles/signup.css';

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      address: '',
      username: '',
      pass: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, address, username, pass } = this.state;
    console.log(fullName, email, address, username, pass);

    fetch('http://localhost:3000/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        address: address,
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
            <h2>Sign Up:</h2>
            <p>Please Use Your Credentials to Sign Up Below</p>
            {/* <form action="submit" method='post'> */}
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder='Full Name' name="fullName"
                onChange={e => this.setState({ fullName: e.target.value })}
              />
              <input type="email" placeholder='Email Address' name="email"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input type="text" placeholder="Address" name="address"
                onChange={e => this.setState({ address: e.target.value })}
              />
              <input type="text" placeholder="Username" name="username"
                onChange={e => this.setState({ username: e.target.value })}
              />
              <input type="password" placeholder='Password' name="pass"
                onChange={e => this.setState({ pass: e.target.value })}
              />
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

}

