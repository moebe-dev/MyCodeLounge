import React from "react";
import LoginButton from "../Components/LoginButton"
import SimpleContainer from "../Components/Container/Container"
import { CssBaseline } from "@material-ui/core";
import ButtonAppBar from '../Components/NavBar/NavBar'
import CardBoxes from '../Components/IntroCard';

export default function Intro() {

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <LoginButton /> */}
      <ButtonAppBar />
      <SimpleContainer />
      <CardBoxes />
    </React.Fragment>
  );
}