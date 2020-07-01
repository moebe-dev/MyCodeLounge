import React from "react";
import SvgIconsSize from "../Components/icon";
import CustomizedInputBase from "../Components/search";
import BasicButtonGroup from "../Components/tRButtons";
import CarouseBanner from "../Components/carousel";
import FilterButton from "../Components/filterButton";
import LeftSideButton from "../Components/leftSidebutton";
import Card from "../Components/cards/cards";
import LoginButton from "../Components/LoginButton"
import { useAuth0 } from "../react-auth0-spa";
import { PropTypes } from "mobx-react";
import ButtonAppBar from '../Components/NavBar/NavBar'
import "../Components/cards/cards.css"
import "../Pages/mainPage.css"



export default function Main(props) {
  const [state, setState] = React.useState({
    checkedA: true,  // Youtube
    checkedB: true,  // Google Books
    checkedC: true,  // Udemy
    checkedD: true,  // W3 Schools
    checkedE: true,  // Stack Overflow
    checkedF: true,  // Unused
  });

  console.log(props);
  return (
      <React.Fragment>
        <CarouseBanner />
      
      {/* row 3 left side buttons, cards, filters */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <LeftSideButton getQueryTopic={props.getQueryTopic}/>
        </div>
        <container>
        <br />
        {state.checkedA ?<div> <div style={{ display: "flex",justifyContent: "space-between",flexDirection:"row", flexWrap:"wrap"}}>
            {props.videos.length && props.videos.map(video=>(
            <Card 
              title= {video.title} 
              link= {video.link} 
              image= {video.image} 
              description= {video.description}
              user={props.user}
              type="videos">
            </Card>))}
          </div> <br /></div>: <div></div> }
        <br />
        {state.checkedB ? <div><div style={{ display: "flex", justifyContent: "space-between", flexDirection:"row" }}>
            {props.books.length && props.books.map(books=>(
            <Card 
              title= {books.title} 
              link= {books.link} 
              image= {books.image} 
              description= {books.description}
              user={props.user}
              type="books">
            </Card>))}
          </div><br /> </div>: <div></div> }
        <br />
        {state.checkedC ? <div><div style={{ display: "flex", justifyContent: "space-between", flexDirection:"row" }}>
            {props.courses.length && props.courses.map(courses=>(
            <Card 
              title= {courses.title} 
              link= {courses.link} 
              image= {courses.image} 
              description= {courses.description}
              user={props.user}
              type="courses">
            </Card>))}
          </div><br /></div> : <div></div> }
        <br />
        {state.checkedE ?<div> <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection:"row" }}>
            {props.answers.length && props.answers.map(answers=>(
            <Card 
              title= {answers.title} 
              link= {answers.link} 
              image= {answers.image} 
              description= {answers.description}
              user={props.user}
              type="questions">
            </Card>))}
          </div><br /> </div>: <div></div> }
          <br />
        </container>
        <div>
          <FilterButton state={state} setState={setState}/>
        </div>
  
    </div>
    </React.Fragment>
  );
}
