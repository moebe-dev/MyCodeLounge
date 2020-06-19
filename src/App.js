import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LoginButton from './Components/LoginButton';
import MainPage from "./Pages/mainPage";
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./Components/Profile";
// import Loading from "./Components/Loading"
import PrivateRoute from "./Components/PrivateRoute";
import history from "./utils/history";


function App () {
  const { loading } = useAuth0();

  if(loading) {
    return <h1>DOG</h1>
  }
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <LoginButton />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/Profile" component={Profile} />
          <MainPage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;