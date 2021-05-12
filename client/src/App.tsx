import React, { FC } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import Lectures from './views/Lectures';
const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <nav>
            <ul className="flex bg-black text-white">
              <li className="p-2 opacity-75 hover:opacity-100">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 opacity-75 hover:opacity-100">
                <Link to="/lectures">Lectures</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content m-2 text-2xl">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/lectures/:id?">
              <Lectures />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
