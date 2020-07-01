import React from "react";
import SvgIconsSize from "../components/layout/icon";
import CustomizedInputBase from "../components/layout/search/search";
import BasicButtonGroup from "../components/layout/buttons/tRButtons";
import CarouseBanner from "../components/layout/carousel/carousel";
import FilterButton from "../components/layout/buttons/filterButton";
import LeftSideButton from "../components/layout/buttons/leftSidebutton";
import Card from "../components/layout/cards/cards";
import LoginButton from "../components/layout/buttons/LoginButton"
import { useAuth0 } from "../react-auth0-spa";
import { PropTypes } from "mobx-react";
import ButtonAppBar from '../components/layout/navbar/NavBar'

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
