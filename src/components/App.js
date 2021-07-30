import React from 'react';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="font-nunito">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
