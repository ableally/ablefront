import Home from './components/Home';
import Quiz from './components/Quiz';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
      <div>
        <Route exact path="/">
          <div className="main-container">
            <Home />
          </div>
        </Route>
        <Route path="/quiz">
          <div className="main-container">
            <Quiz />
          </div>
        </Route>
      </div>
    </Router>

  );
}

export default App;

