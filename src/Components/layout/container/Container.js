import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Dev from "../../../assets/images/introImage";
import { autorun } from "mobx";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      marginTop: 200,
      backgroundColor: "#000000",
      padding: 50,
    },
    header: {
      backgroundColor: "#ffffff",
      fontSize: "3rem",
      color: "#00c2cb",
      textAlign: "center",
    },
    title: {
      color: "#00c2cb",
      fontSize: "3rem",
      margin: 50,
    },
    subtitle: {
      color: "#ffffff",
      marginBottom: 20,
      padding: 20,
      fontSize: 20,
      
    },
  })
);

export default function container() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        Container
        zeroMinWidth
        alignContent="space-around"
        disableGutters
      >
        <Typography
          className={classes.root}
        >
          <Grid item xs={12} md={8} lg={6} zeroMinWidth>
            <Typography className={classes.title}>
              Looking for a change of pace?
            </Typography>
          </Grid>
        </Typography>
        <Grid
          Container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          disableGutters
          zeroMinWidth	
        >
          <Grid item xs={12} md={8} lg={6}>
            <Dev /> <Typography className={classes.subtitle} zeroMinWidth>
              We are here to help!
              <br />
              From a simple youtube video to a full course from some of the most
              popular sites online!
              <br></br>
              Developed by Bootcamp grads, these resources helped us get through
              our class, and still have plenty of resources to keep learning!
            </Typography>
          </Grid>
        </Grid>

        <Typography className={classes.header} gutterBottom>
          Topics we focus on
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
