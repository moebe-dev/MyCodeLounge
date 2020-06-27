import React from "react";
import SvgIconsSize from "../Components/icon";
import CustomizedInputBase from "../Components/search";
import BasicButtonGroup from "../Components/tRButtons";
import CarouseBanner from "../Components/carousel";
import FilterButton from "../Components/filterButton";
import LeftSideButton from "../Components/leftSidebutton";
import Card from "../Components/cards";
import LoginButton from "../Components/LoginButton"
import { useAuth0 } from "../react-auth0-spa";
import { PropTypes } from "mobx-react";
import ButtonAppBar from '../Components/NavBar/NavBar'

export default function Main(props) {
  console.log(props);
  return (
      <React.Fragment>
        <CarouseBanner />
      
      {/* row 3 left side buttons, cards, filters */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <LeftSideButton />
        </div>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            {props.videos.length && props.videos.map(video=>(
            <Card 
              title= {video.title} 
              link= {video.link} 
              image= {video.image} 
              description= {video.description}>
            </Card>))}
        </div> */}
        <div>
          <FilterButton></FilterButton>
        </div>
  
    </div>
    </React.Fragment>
  );
}
