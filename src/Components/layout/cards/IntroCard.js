import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import { shadows } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:'space-around',
  

  },
  Card: {
    width: 250,
    marginTop:50,
    background: "linear-gradient(45deg, #393E41 10%, #121517 90%)",
    color: "#f9b1ae",
    
  },

  Typography: {
    body2: {},
  },
});

const CardBoxes = () => {
  const classes = useStyles();
  return (
  
    <div className={classes.root}>
      
        <Card className={classes.Card}>
      
        <CardActionArea >
          <CardMedia
            component="img"
            alt="HTML"
            image="data:image/png;base64,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"
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <Box letterSpacing={3} m={1} textAlign="center">
                HTML
              </Box>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Box textAlign="center" fontSize={20}>
                A computer language devised to allow website creation.
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
      
      <Card className={classes.Card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="HTML"
            image="https://cdn.lynda.com/course/439683/439683-637286184374750281-16x9.jpg"
            title="HTML"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <Box letterSpacing={3} m={1} textAlign="center">
                HTML
              </Box>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Box textAlign="center" fontSize={20}>
                A computer language devised to allow website creation.
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
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
              <Box letterSpacing={3} m={1} textAlign="center">
                HTML
              </Box>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Box textAlign="center" fontSize={20}>
                A computer language devised to allow website creation.
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
    <Card className={classes.Card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="HTML"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpA1Cg_4lZhdhrxbTenNFyW0fzQv8sjjKkuQ&usqp=CAU"
        title="HTML"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          <Box letterSpacing={3} m={1} textAlign="center">
            HTML
          </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Box textAlign="center" fontSize={20}>
            A computer language devised to allow website creation.
          </Box>
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
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
          <Box letterSpacing={3} m={1} textAlign="center">
            HTML
          </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Box textAlign="center" fontSize={20}>
            A computer language devised to allow website creation.
          </Box>
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
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
          <Box letterSpacing={3} m={1} textAlign="center">
            HTML
          </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Box textAlign="center" fontSize={20}>
            A computer language devised to allow website creation.
          </Box>
        </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </div>

  );
};

export default CardBoxes;
