import React from 'react';
import Dashboard from "../src/components/dashboard/Dashboard";
import SignUp from "../src/components/Signup/Signup";
import LogIn from "../src/components/Login/Login"
import {Switch, Route, Link, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={LogIn}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
