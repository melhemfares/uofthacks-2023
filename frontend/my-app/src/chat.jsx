import React, { Component } from 'react'
import './styles/chat.css';

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    console.log(input);

    fetch('http://localhost:5000/api/v1/co/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: input
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }



render(){
  return (
    <div className='Chat'>
      <div className="nav">
        <img src="" alt="" />
        <a href="/">Home</a>
      </div>



      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='Type something...'/>
        <button type='submit' id='msg_btn'>Send</button>
              <br />
      </form>



      
      
    </div>
  )}
}
