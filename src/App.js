import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Translate from "./Translate";
import Header from "./Header";
function App() {
  return (
      <Router>
          <Header/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/translate/:text" component={Translate}></Route>
          </Switch>
      </Router>
  );
}

export default App;
