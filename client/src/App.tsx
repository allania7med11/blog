import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import Lectures from './views/Lectures';
import navbar from "@/assets/css/navbar.module.scss"
const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <nav className={`${navbar.nav}`}>
          <ul className="flex  text-white items-center h-full">
            <li className="opacity-75 hover:opacity-100">
              <Link to="/">Home</Link>
            </li>
            <li className="opacity-75 hover:opacity-100">
              <Link to="/lectures">Lectures</Link>
            </li>
          </ul>
        </nav>
        <div className="content m-2 mt-16">
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
