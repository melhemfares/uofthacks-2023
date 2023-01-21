import './styles/home.css';

function Home() {
  return (
    <div className="App">

      <div className="nav">
        {/* <h6>TherapyAI</h6> */}
        {/* <img className="nav-logo" src="https://pngimg.com/d/brain_PNG70.png" alt="logo" /> */}
        <a href="/login">Try TherapyAI</a>
      </div>

      <div className="body">
        <h1>TherapyAI</h1>
        <h5>TherapyAI is a online chatbot that gives you instant acess to different 
          resources available to you. It is often the case that there are no real 
          person to talk to during difficult times. Thats when TherapyAI comes into 
          play. It is an AI chatbot that can understand the individual's emotion and 
          reacts accordingly. Whether its conneting them to a medical representative, 
          or even just be there by the individual's side. 
        </h5>

        <img className="chatbot-logo" src="https://www.startupchefs.in/wp-content/uploads/2021/04/chatbot-2.png" alt="chatbot logo"/>
        <br /> <br />
        <a className='home-link' href="/login">Try TherapyAI</a>
        <br /> <br />
        <h3>How TherapyAI is Different</h3>
        <h5>TherapyAI has the ablitity to detect the user's emotion, severity, and 
            condition based on the user's input. From there, it makes constructive 
            decision to respond the user's inquires. For instance, if the severity of 
            the user is critical, it will directly give resources of medical assistance
            while if its not critical, it will continue to chat with the user along  
            with providing assistance. 
        </h5>
        
      </div>
    </div>
  );
}

export default Home;
