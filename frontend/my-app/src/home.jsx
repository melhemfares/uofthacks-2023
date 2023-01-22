import './styles/home.css';

function Home() {
  return (
    <div className="App">

      <div className="nav">
        {/* <h6>TherapyAI</h6> */}
        <img style={{postion: "absolute", left:"100px", top: "10px"}} className="nav-logo" src="https://cdn-icons-png.flaticon.com/512/5659/5659645.png" alt="logo" />
        <a href="/login">Try TherapyAI</a>
      </div>

      <div className="body">
        <div style={{textAlign: "left", marginTop: 50}}>
          <h1><img className="chatbot-logo" src="https://cdn-icons-png.flaticon.com/512/5659/5659645.png" alt="chatbot logo"/> TherapyAI.</h1>
          <p>TherapyAI is an online chatbot that gives you instant acess to different 
            resources available to you. It is often the case that there are no real 
            person to talk to during difficult times. Thats when TherapyAI comes into 
            play. It is an AI chatbot that can understand the individual's emotion and 
            reacts accordingly. Whether its conneting them to a medical representative, 
            or even just be there by the individual's side. 
          </p>
        </div>

        <br /> <br />
        <a className='home-link' href="/login">Try TherapyAI</a>
        <br /> <br />
        <div className='container'>
            <div className='object'>
                <h3>How is TherapyAI Different</h3>
                <h5>TherapyAI has the ablitity to detect the user's emotion, severity, and 
                    condition based on the user's input. From there, it makes constructive 
                    decision to respond the user's inquires. For instance, if the severity of 
                    the user is critical, it will directly give resources of medical assistance
                    while if its not critical, it will continue to chat with the user along  
                    with providing assistance. 
                </h5>
            </div> 
            <div className='object'>
                <h3>How TherapyAI Can Help You</h3>
                <h5>TherapyAi have access to different resources to refer you to. For instane, if 
                  your severity of your inquiry is critical, it will it will refer you to medical
                  assistance nearest available to you. On the other hand, if the severity of your 
                  inquiry is not so severe, it will give you general advice on what to do at the exact 
                  situation.  
                </h5>
            </div> 
            <div className='object'>
                <h3>The Next Steps for TherapyAI</h3>
                <h5>This is only the beginning for TherapyAI. At this current time, therapy ai has the 
                  following features such as identifying the user’s emotion, giving them advice and 
                  resources. These are only the starting features and we plan to train therapy ai’s model to 
                  make it more reliable and to find a pattern between the medication and the user’s mental 
                  condition.
                </h5>
            </div> 
        </div>

        <div className='footer'>
          Powered by Co:here Platform © UofT Hacks 2023 x The TherapyAI Team
        </div>
        
      </div>
    </div>
  );
}

export default Home;
