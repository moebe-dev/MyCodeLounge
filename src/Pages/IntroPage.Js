import React from "react";
import LoginButton from "../components/layout/buttons/LoginButton"
import SimpleContainer from "../components/layout/container/Container"
import { CssBaseline } from "@material-ui/core";
import ButtonAppBar from '../components/layout/navbar/NavBar'
import CardBoxes from '../components/layout/cards/IntroCard';

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