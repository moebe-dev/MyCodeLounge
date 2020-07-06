import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    padding: 20,
    flexGrow: 5,
  },
  Card: {
    margin: 50, 
    height: "450px",
    background: "linear-gradient(45deg, #494947 10%, #000000 90%)",
    border: "1px solid #00c2cb",
    borderRadius: 10,
    margin: "0 auto",
    
  },
  Box :{
    color: "#ebfaff",

  },
  title: {
    color: "#00c2cb"
  }
});

const CardBoxes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
    <Grid item xl={2} lg={4} md={6} sm={8} xs={12} spacing={3}>
        <Card className={classes.Card} >
        <CardActionArea >
          <CardMedia
            component="img"
            alt="HTML"
            image="data:image/png;base64,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"
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <Box className={classes.title} letterSpacing={3} m={2}  textAlign="center" fontSize={32}>
                HTML
              </Box>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              <Box textAlign="center" fontSize={16} className={classes.Box}>
                Hypertext Markup Languange, HTML is used to create different pages on the internet is is the foundation for a lot of the code you will be learning!
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xl={2} lg={4} md={6} sm={8} xs={12} spacing={3}>
      <Card className={classes.Card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="HTML"
            image="https://cdn.lynda.com/course/439683/439683-637286184374750281-16x9.jpg"
            title="Css"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <Box className={classes.title} letterSpacing={3} m={1} textAlign="center" fontSize={32}>
                CSS
              </Box>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              <Box textAlign="center" fontSize={16} className={classes.Box}>
                Cascading Style Sheets, desribes how the HTML elements will be positioned and styled on the page. This language is what adds color and life to your application! Colored borders? No Problem! Use Css!
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xl={2} lg={4} md={6} sm={8} xs={12} spacing={3}>
      <Card className={classes.Card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="HTML"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFyqaajk_qzjK_VdmCAIXoXwVm1NOCtyYIYw&usqp=CAU"
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <Box className={classes.title} letterSpacing={3} m={1} textAlign="center" fontSize={32}>
                JAVASCRIPT
              </Box>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              <Box textAlign="center" fontSize={16} className={classes.Box}>
              JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. JavaScript gives web pages interactive elements that engage a user.
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        </Grid>
        <Grid item xl={2} lg={4} md={6} sm={8} xs={12} spacing={3}>
    <Card className={classes.Card} >
    <CardActionArea>
      <CardMedia
        component="img"
        alt="HTML"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpA1Cg_4lZhdhrxbTenNFyW0fzQv8sjjKkuQ&usqp=CAU"
        title="HTML"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          <Box className={classes.title} letterSpacing={3} m={1} textAlign="center" fontSize={32}>
           REACT
          </Box>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          <Box textAlign="center" fontSize={16} className={classes.Box}>
          React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
          </Box>
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </Grid>
    <Grid item xl={2} lg={4} md={6} sm={8} xs={12} spacing={3}>
    <Card className={classes.Card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="HTML"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeYZO8ozQOIH1jUjdvh6go1C2hQmi-WOhEag&usqp=CAU"
        title="HTML"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          <Box className={classes.title} letterSpacing={3} m={1} textAlign="center" fontSize={32}>
            NODE
          </Box>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          <Box textAlign="center" fontSize={16} className={classes.Box}>
          Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.
          </Box>
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </Grid>
    <Grid item  xl={2} lg={4} md={6} sm={8} xs={12} spacing={3}>
    <Card className={classes.Card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="HTML"
        image="data:image/png;base64,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"
        title="HTML"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          <Box className={classes.title} letterSpacing={3} m={1} textAlign="center" fontSize={32}>
            JQUERY
          </Box>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="p">
          <Box textAlign="center" fontSize={16} className={classes.Box}>
          jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website.
          </Box>
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </Grid>
    </Grid>
</div>


  );
};

export default CardBoxes;
