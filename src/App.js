import React, { Component, useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import LoginButton from './Components/LoginButton';
import MainPage from "./Pages/mainPage";
import { useAuth0 } from "./react-auth0-spa";
// import Profile from "./Components/Profile";
import Loading from "./Components/Loading"
import PrivateRoute from "./Components/PrivateRoute";
import history from "./utils/history";
import Main from "./Pages/mainPage";
import Intro from "./Pages/IntroPage"
import ButtonAppBar from "./Components/NavBar/NavBar"
import API from "./utils/API";
import IntroPage from "./Pages/IntroPage"


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
    return <Loading style={{position: 'fixed', }}/>
  }
  // if(!isAuthenticated){
  //   return(
  //   <Router history={history}>
  //   <PrivateRoute path="/mainPage" component = {()=><MainPage videos={videos}></MainPage>}/>
  //   </Router>
  //   )}

  console.log(videos)
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <ButtonAppBar />
        </header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Switch>
          <Route path="/IntroPage" exact component = {()=><MainPage videos={videos}></MainPage>}/> 
          <PrivateRoute path="/mainPage" component = {()=><MainPage videos={videos}></MainPage>}/>
          <MainPage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;