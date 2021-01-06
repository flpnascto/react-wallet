import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
