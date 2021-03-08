import "./App.css";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
