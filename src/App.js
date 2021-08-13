import React from 'react';

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Game from './components/Game/Game';
import Login from './components/Login/Login';
import Header from './components/UI/Header';

function App() {

  return (

    <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={Login}
            exact
          />
          <Route
            path="/dashboard"
            component={Game}
            exact
          />
          <Redirect
            to="/"
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
