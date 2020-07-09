import React, { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/mainPage";
import { useAuth0 } from "./react-auth0-spa";
import Loading from "./components/layout/Loading";
import history from "./utils/history";
import Intro from "./Pages/IntroPage";
import ButtonAppBar from "./components/layout/navbar/NavBar";
import API from "./utils/API";
import { StylesProvider } from "@material-ui/core/styles";

function App() {
  const [videos, setVideos] = useState([]);
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [news, setNews] = useState([]);
  const [favPage, setFavPage] = useState(false);
  const { loading, user, isAuthenticated } = useAuth0();

  const getQueryTopic = (query) => {
    API.searchStackOverFlow(query).then((res) => setAnswers([...res.data]));

    API.getYoutubeVideos(query)
      .then((res) => setVideos([...res.data]))
      .catch(setVideos([]));

    API.getGoogleBooks(query).then((res) => setBooks([...res.data]));

    API.getUdemyCourses(query).then((res) => setCourses([...res.data]));

    setFavPage(false);
  };

  const getFavClicked = () => {
    API.queryAllUserData(user.email).then((res) => {
      res.data.questions ? setAnswers([...res.data.questions]) : setAnswers([]);
      res.data.videos ? setVideos([...res.data.videos]) : setVideos([]);
      res.data.books ? setBooks([...res.data.books]) : setBooks([]);
      res.data.courses ? setCourses([...res.data.courses]) : setCourses([]);
      setFavPage(true);
    });
  };

  const handleAddOrRemove = (item, favorite) => {
    favorite || favPage ? deleteFromUserProfile(item) : saveToUserProfile(item);
  };

  const saveToUserProfile = (item) => {
    const { user, type, title, description, image, link } = item;
    const data = {
      title: title,
      description: description,
      image: image,
      link: link,
    };
    API.saveToUser(user, type, data)
      .then(() => { })
      .catch((err) => console.log(err));
  };

  const deleteFromUserProfile = (item) => {
    const { user, type, title, index } = item;
    API.removeFromUser(user, type, title)
      .then(() => {
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
            case "questions":
              let tAnswers = [...answers];
              tAnswers.splice(index, 1);
              setAnswers(tAnswers);
              break;
            default:
              break;
          }
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    API.getYoutubeVideos().then((res) => setVideos([...res.data]));

    API.getGoogleBooks().then((res) => setBooks([...res.data]));

    API.getUdemyCourses().then((res) => setCourses([...res.data]));

    API.getGoogleNews().then((res) => {
      setNews([...res.data]);
    });
  }, []);

  if (loading) {
    return <Loading style={{ position: "fixed" }} />;
  }
  if (!isAuthenticated) {
    return (
      <Router history={history}>
        <Route path="/" component={() => <Intro />} />
      </Router>
    );
  }

  return (
    <StylesProvider injectFirst>
      <div className="App">
        <Router history={history}>
          <header>
            <ButtonAppBar
              getQueryTopic={getQueryTopic}
              getFavClicked={getFavClicked}
            />
          </header>
          <br />
          <br />
          <br />
          <br />
          <br />

          <Switch>
            <MainPage
              videos={videos}
              books={books}
              courses={courses}
              answers={answers}
              news={news}
              user={user.email}
              getQueryTopic={getQueryTopic}
              handleAddOrRemove={handleAddOrRemove}
              favPage={favPage}
            />
          </Switch>
        </Router>
      </div>
    </StylesProvider>
  );
}

export default App;
