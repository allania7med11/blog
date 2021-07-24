import React, { FC } from 'react';
import { createBrowserHistory } from "history";
import { Router } from 'react-router'
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home';
import Lectures from './views/Lectures';
import { SignUp } from './views/SignUp';
import { Login } from './components/Users/Login';
import { Navbar } from './layouts/Navbar';
import { getCurrent } from './store/user/actions';
import { useDispatch } from 'react-redux';
export const updateUrl = createBrowserHistory()
const App: FC = () => {
  const dispatch = useDispatch();
  dispatch(getCurrent())
  return (
    <Router history={updateUrl}>
      <div className="app">
        <Navbar />
        <div className="content m-2 mt-16">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signup" exact>
              <SignUp/>
            </Route>
            <Route path="/login" exact>
              <Login/>
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
