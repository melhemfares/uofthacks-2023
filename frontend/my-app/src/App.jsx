import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./home"
import Chat from "./chat"

function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/chat' element={< Chat />}></Route>
            </Routes>
          </div>
       </Router>
  );
}

export default App;
