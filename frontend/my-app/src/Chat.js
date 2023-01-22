import React from 'react'
import './styles/chat.css';

export default function Chat() {
  return (
    <div className='Chat'>
      <div className="nav">
        <img src="" alt="" />
        <a href="/">Home</a>
      </div>

      <div className='chats'>
        {/* render chats dynamically but follow the provided class naming convention */}
    
        <div className='chat-bubble me'>
          hello
        </div>
        <div className='chat-bubble ai'>
          hi there
        </div>
        <div className='chat-bubble ai'>
          how are you doing today?
        </div>
        <div className='chat-bubble me'>
          im okay
        </div>
        <div className='chat-bubble ai'>
          thats great to hear.
        </div>
        <div className='chat-bubble ai'>
          anything new?
        </div>

        <div className='input-wrapper'>
          <input type="text" placeholder='Type something...'/>
        </div>
      </div>

    </div>
  )
}
