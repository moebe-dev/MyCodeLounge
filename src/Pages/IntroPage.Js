import React from "react";

import SimpleContainer from "../Components/layout/container/Container.js"
import { CssBaseline } from "@material-ui/core";
import ButtonAppBar from '../Components/layout/navbar/NavBar'
import CardBoxes from '../Components/layout/cards/IntroCard';

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