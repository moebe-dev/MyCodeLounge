import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LoginButton from "../buttons/LoginButton";
import CustomizedInputBase from "../search/search";
import Logo from "../../../assets/Logos/Logo";
import AccountBtn from "../buttons/accountBtn";
import { useAuth0 } from "../../../react-auth0-spa";
import Button from "@material-ui/core/Button";
import { findByLabelText } from "@testing-library/react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import ResourceBtn from '../buttons/resourceBtn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#00c2cb",
  },

}));

export default function ButtonAppBar(props) {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar
          postition="static"
          disableGutters
        >
          <Toolbar>
            <Logo />

            <div>
              {!isAuthenticated && (
                <Button
                  variant="outlined"
                  size="medium"
                  color="inherit"
                  onClick={() => loginWithRedirect({})}
                >
                  Log in
                </Button>
              )}

              {isAuthenticated && (
                  <CustomizedInputBase
                    getQueryTopic={props.getQueryTopic}
                    maxWidth="300px"
                  />
                ) && <AccountBtn /> && (
                  <Button
                    variant="outlined"
                    size="medium"
                    color="inherit"
                    onClick={() => logout()}
                  >
                    <p>{user ? <p>{user.name}</p> : <div></div>}</p>
                  </Button>
                )}
            </div>
          </Toolbar>
        </AppBar>
    </div>
  );
}
