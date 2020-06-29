import React, { Component, useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import LoginButton from './Components/LoginButton';
import MainPage from "./Pages/mainPage";
import { useAuth0 } from "./react-auth0-spa";
// import Profile from "./Components/Profile";
import Loading from "./Components/Loading"
import PrivateRoute from "./Components/PrivateRoute";
import history from "./utils/history";
import ButtonAppBar from "./Components/NavBar/NavBar"
import API from "./utils/API";



function App () {
  const [videos, setVideos] = useState([]);  // React state when using fuctions instead of classes
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [answers, setAnswers] = useState([]);
  const { loading, user, isAuthenticated } = useAuth0();

  const getQueryTopic = (query) => {
    API.searchStackOverFlow(query)
    .then(res =>{
      setAnswers([...res.data])
    });
    API.getYoutubeVideos(query)
       .then(res => {
         setVideos([...res.data])
       })
       .catch(err => console.log(err));

      API.getGoogleBooks(query)
      .then(res => {
        setBooks([...res.data])
      })
      .catch(err => console.log(err))

      API.getUdemyCourses(query)
      .then(res =>{
        setCourses([...res.data])
      })
  }

    // this is similar method to componentDidMount for classes
    useEffect(() => {
      API.getYoutubeVideos()
       .then(res => {
         setVideos([...res.data])
       })
       .catch(err => console.log(err));

      API.getGoogleBooks()
      .then(res => {
        setBooks([...res.data])
      })
      .catch(err => console.log(err))

      API.getUdemyCourses()
      .then(res =>{
        setCourses([...res.data])
      })
      // API.searchStackOverFlow()
      // .then(res =>{
      //   setAnswers([...res.data])
      // })
    }, []);

  if(loading) {
    return <Loading style={{position: 'fixed', }}/>
  }
  if(!isAuthenticated){
    return(
    <Router history={history}>
    <PrivateRoute path="/mainPage" component = {()=><MainPage videos={videos}></MainPage>}/>
    </Router>
    )}

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <ButtonAppBar getQueryTopic={getQueryTopic}/>
        </header>
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <Switch>
          <Route path="/IntroPage" exact component = {()=><MainPage videos={videos}></MainPage>}/> 
          <PrivateRoute path="/mainPage" component = {()=><MainPage videos={videos}></MainPage>}/>
          <MainPage 
          videos= {videos} 
          books={books} 
          courses={courses} 
          answers={answers}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;