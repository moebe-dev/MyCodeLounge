import React from "react";

import SimpleContainer from "../components/layout/container/Container.js";
import { CssBaseline } from "@material-ui/core";
import ButtonAppBar from "../components/layout/navbar/NavBar";
import CardBoxes from "../components/layout/cards/IntroCard";

export default function Intro() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar />
      <SimpleContainer />
      <CardBoxes />
    </React.Fragment>
  );
}
