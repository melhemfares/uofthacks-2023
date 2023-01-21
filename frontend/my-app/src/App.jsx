import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./home"
import Login from "./login"

function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
            </Routes>
          </div>
       </Router>
  );
}

export default App;
