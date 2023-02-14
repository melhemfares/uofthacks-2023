import React, { useState, useRef } from "react";
import './styles/chat.css';

function ChatGPTClone() {
  const [inputList, setInputList] = useState([]);
  const [outputList, setOutputList] = useState(["Hey there, how are you feeling today?"]);
  const [input, setInput] = useState("");
  const [loadingResponse, setLoadingResponse] = useState(false);

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const spliceMsg = string => {
    return string.slice(0, string.lastIndexOf(".") + 1);
  }

  const arrayMerge = (array1, array2) => {
    const mergedArray = [];

    for (let i = 0; i < Math.max(array1.length, array2.length); i++) { 
      if (array1[i] !== undefined) { 
        mergedArray.push(array1[i]); 
      }

      if (array2[i] !== undefined) { 
        mergedArray.push(array2[i]); 
      }
    }

    return mergedArray;
  }

  const handleSubmit = event => {
    event.preventDefault();
    setLoadingResponse(true);
    setInputList([...inputList, input]);
    setInput("");
    setTimeout(scrollToBottom, 200);

    fetch('http://localhost:3008/api/v1/co/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input
      })
    })
      .then(res => res.json())
      .then(data => {
        setLoadingResponse(false);
        setOutputList([...outputList, spliceMsg(data.msg.response).trim()]);
        setTimeout(scrollToBottom, 200);
      })
  }

  return (
    <div className="ChatWrapper">
      <h2 style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: 160}}><img width={30} src="https://cdn-icons-png.flaticon.com/512/5659/5659645.png"/> TherapyAI.</h2>
      <ul>
        {arrayMerge(outputList, inputList).map((message, index) => (
          <li key={index}>{message}</li>
        ))}
        {loadingResponse ? <li><img src="https://jbgs.arphahub.com/i/simple_loading.gif" width={30}/></li> : ""}
        <span id="chatBottom" ref={messagesEndRef}></span>
      </ul>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input disabled={loadingResponse} placeholder={loadingResponse ? "Loading response" : ""} value={input} onChange={event => setInput(event.target.value)} />
        <button disabled={loadingResponse} type="submit">{loadingResponse ? <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" width={14}/> : <span>Send</span>}</button>
      </form>
    </div>
  );
}

export default ChatGPTClone;