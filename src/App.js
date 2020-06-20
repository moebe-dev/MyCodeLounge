import React from "react";
import { observer } from "mobx-react";
import UserStore from "./stores/UserStore";
import LoginForm from "./LoginForm";
import SubmitButton from "./SubmitButton";
import "./App.css";
import MainPage from "./Pages/mainPage";
import API from "./utils/API";
import { CircularProgress } from "@material-ui/core";

class App extends React.Component {
  async componentDidMount() {
    // get 5/30 random youtube videos on "full stack development"
    // API.getYoutubeVideos()
    //    .then(res => console.log(res));

    // get all links for howtos on w3 webstie
    // works for ["html", "css", "js", "sql", "python", "php", "howto", "w3css", "jquery", "java", "react", "nodejs", "angular", "cpp", "cs", "sass", "xml"]
    // API.getW3Reference("js")
    //    .then(res => console.log(res));

    // get 5/30 random google books on "full stack development"
    API.getGoogleBooks()
       .then(res => console.log(res));

    // !!!!!   cant get working b/c cant sign up for API !!!!!!! //
    // get random courses on "full stack development"
    // API.getUdemyCourses()
    //    .then(res => console.log(res));

    // API.searchStackOverFlow("center image css")
    //    .then(res => console.log(res));

    // API.saveBookToUser("dummy info")
    //    .then(res => console.log(res));


    try {
      let res = await fetch("/isLoggedIn", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      
      let result = await res.json();
      
      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      console.log(e);
    }
  }
  
  render() {
    if (UserStore.loading) {
      return (
        <div className="app">
          <div className="container">Loading, Please Wait...</div>
        </div>
      );
    } else {
      if (UserStore.isLoggedIn) {
        return (
          <div className="app">
            <div className="container">
              Welcome {UserStore.username}
              <SubmitButton
                text={"Log out"}
                disable={false}
                onClick={() => this.doLogout()}
              />
            </div>
          </div>
        );
      }
      
      return (
        <div className="app">
          <MainPage></MainPage>
          {/* <div className="container">
            <LoginForm />
          </div> */}
        </div>
      );
    }
  }
}

export default observer(App);
