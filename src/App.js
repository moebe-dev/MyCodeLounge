import React, { Component, useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import LoginButton from './Components/LoginButton';
import MainPage from "./Pages/mainPage";
import { useAuth0 } from "./react-auth0-spa";
// import Profile from "./Components/Profile";
// import Loading from "./Components/Loading"
import PrivateRoute from "./Components/PrivateRoute";
import history from "./utils/history";
// import NavBar from "./Components/NavBar/NavBar"
import API from "./utils/API";


function App () {
  const [videos, setVideos] = useState([]);  // React state when using fuctions instead of classes
  const { loading, user, isAuthenticated } = useAuth0();

  // this is similar method to componentDidMount for classes
  useEffect(() => {
    API.getYoutubeVideos()
     .then(res => {
       setVideos([...res.data])
     })
     .catch(err => console.log(err));
     
  }, []);

  if(loading) {
    return <h1>DOG</h1>
  }
  if(!isAuthenticated){
    return(
    <Router history={history}>
    <PrivateRoute path="/mainPage" component = {()=><MainPage videos={videos}></MainPage>}/>)
    </Router>
    )}

  console.log(videos)
  return (
    <div className="App">
      <Router history={history}>
        <header>
    {/* <NavBar /> */}
     <LoginButton />
            
          <p>{user ? <p>{user.email}</p> : <div></div>}</p>   
        </header>
        <Switch>
          <Route path="/" exact component = {()=><MainPage videos={videos}></MainPage>}/> 
          <PrivateRoute path="/mainPage" component = {()=><MainPage videos={videos}></MainPage>}/>
          <MainPage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;