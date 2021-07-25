import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Importing pages
import Home from "./pages/Home/Home"
import Stats from "./pages/Stats/Stats"

// Importing Components
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
<Router>
      <div className="App">
        <Sidebar/>
        <Switch>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

