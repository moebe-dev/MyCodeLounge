import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Image from "./introimg.jpeg";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      width: "100%",
      height: "500",
      padding: 50,
      marginTop: 200,
    },
    header: {
      background: "linear-gradient(45deg, #494947 5%, #151514 90%)",
      fontSize: "2rem",
      fontWeight: 100,
      color: "#f6a2ab",
      textAlign: "center",
      padding: 23,
    },
    title: {
      color: "#f6a2ab",
      fontSize: "3rem",
      margin: 10,
      fontWeight: 100,
    },
    subtitle: {
      textAlign: "center",
      color: "#ffffff",
      margin: 40,
      padding: 20,
      fontSize: 30,
      fontWeight: 400,

      textShadow: " 5px 2px #494947",
    },
  })
);
const styles = {
  Container: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
  },
};
export default function container() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        direction="row"
        disableGutters
        style={styles.Container}
      >
        <Typography className={classes.root}>
          <Typography className={classes.title}>
            LOOKING FOR A CHANGE OF PACE?
          </Typography>
        </Typography>

        <Typography className={classes.subtitle}>
          We are here to help!
          <br />
          From a simple youtube video to a full course from some of the most
          popular sites online!
          <br></br>
          Developed by Bootcamp grads, these resources helped us get through our
          class, and still have plenty of resources to keep learning!
        </Typography>

        <Typography className={classes.header} gutterBottom>
          AREAS OF FOCUS..
        </Typography>
      </Container>
    </React.Fragment>
  );
}
