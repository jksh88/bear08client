import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import SubmitApp from './Components/SubmitApp'
import "./App.css";

const App: FunctionComponent = ({ children }) => {
  return (
    <>
      <h1 className="app">test</h1>
      {children}
      <Router>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/submit">Submit</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/submit" component={SubmitApp} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
