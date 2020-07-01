import React, { useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/mainPage";
import { useAuth0 } from "./react-auth0-spa";
import Loading from "./Components/layout/Loading"
import history from "./utils/history";
import Intro from "./Pages/IntroPage"
import ButtonAppBar from "./Components/layout/navbar/NavBar"
import API from "./utils/API";



function App () {
  const [videos, setVideos] = useState([]);  // React state when using fuctions instead of classes
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [answers, setAnswers] = useState([]);
  const { loading, user, isAuthenticated } = useAuth0();

  const getQueryTopic = (query) => {
    API.searchStackOverFlow(query)
       .then(res => setAnswers([...res.data]));

    API.getYoutubeVideos(query)
       .then(res => setVideos([...res.data]));

    API.getGoogleBooks(query)
      .then(res => setBooks([...res.data]));

    API.getUdemyCourses(query)
      .then(res => setCourses([...res.data]));
  }

    // this is similar method to componentDidMount for classes
    useEffect(() => {
      API.getYoutubeVideos()
       .then(res => setVideos([...res.data]));

      API.getGoogleBooks()
      .then(res => setBooks([...res.data]));

      API.getUdemyCourses()
      .then(res => setCourses([...res.data]));

    }, []);

  if(loading) {
    return <Loading style={{position: 'fixed', }}/>
  }
  if(!isAuthenticated){
    return(
    <Router history={history}>
    <Route path="/" component = {()=><Intro/>}/>
    </Router>
    )}

  console.log(videos)
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
          
          <MainPage 
          videos= {videos} 
          books={books} 
          courses={courses} 
          answers={answers}
          user={user.email}
          getQueryTopic={getQueryTopic}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;