import React, { useEffect, useState } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/mainPage";
import { useAuth0 } from "./react-auth0-spa";
import Loading from "./Components/layout/Loading"
import history from "./utils/history";
import Intro from "./Pages/IntroPage"
import ButtonAppBar from "./Components/layout/navbar/NavBar"
import API from "./utils/API";
import "./App.css"
import { StylesProvider } from "@material-ui/core/styles";



function App () {
  const [videos, setVideos] = useState([]);  // React state when using fuctions instead of classes
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [favPage, setFavPage] = useState(false);
  const { loading, user, isAuthenticated } = useAuth0();

  const getQueryTopic = (query) => {
    API.searchStackOverFlow(query)
       .then(res => setAnswers([...res.data]));

    API.getYoutubeVideos(query)
       .then(res => setVideos([...res.data]))
       .catch(setVideos([]));  // catches corner case if API is down
       

    API.getGoogleBooks(query)
      .then(res => setBooks([...res.data]));

    API.getUdemyCourses(query)
      .then(res => setCourses([...res.data]));

    // for each query, set everything to a save state
    setFavPage(false);
  }

  const getFavClicked = () => {
    API.queryAllUserData(user.email)
       .then(res => {
         res.data.answers ? setAnswers([...res.data.answers]) : setAnswers([])
         res.data.videos ? setVideos([...res.data.videos]) : setVideos([])
         res.data.books ? setBooks([...res.data.books]) : setBooks([])
         res.data.courses ? setCourses([...res.data.courses]) : setCourses([])
         // for querying favorites, put everything in a remove state
         setFavPage(true);
       })
  }

  const handleAddOrRemove = (item, favorite) => {
    // when heart button is clicked, either save or remove items based on if its a favorite or not
    favorite || favPage ? deleteFromUserProfile(item) : saveToUserProfile(item);
  }

  const saveToUserProfile = (item) => {
    const { user, type, title, description, image, link } = item;
    const data = {
      title: title,
      description: description,
      image: image,
      link: link
    }
    API.saveToUser(user, type, data).then(()=>{
      // setAddOrRemove(true)
    })
       .catch(err => console.log(err));
  }

  const deleteFromUserProfile = (item) => {
    const { user, type, title, index } = item;
    API.removeFromUser(user, type, title).then(()=>{
      if (favPage) {
        switch (type) {
          case "videos":
            let tVideos = [...videos];
            tVideos.splice(index, 1);
            setVideos(tVideos);
            break;
          case "books":
            let tBooks = [...books];
            tBooks.splice(index, 1);
            setBooks(tBooks);
            break;
          case "courses":
            let tCourses = [...courses];
            tCourses.splice(index, 1);
            setCourses(tCourses);
            break;
          case "answers":
            let tAnswers = [...answers];
            tAnswers.splice(index, 1);
            setAnswers(tAnswers);
            break;
          default:
            break;
        }
      }
    })
       .catch(err => console.log(err));
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

  return (
    <StylesProvider injectFirst>
    <div className="App">
      <Router history={history}>
        <header>
          <ButtonAppBar getQueryTopic={getQueryTopic} getFavClicked={getFavClicked}/>
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
          getQueryTopic={getQueryTopic}
          handleAddOrRemove={handleAddOrRemove}
          favPage={favPage}/>
        </Switch>
      </Router>
    </div>
 </StylesProvider>

  );
}

export default App;