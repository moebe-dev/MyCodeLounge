import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        WebkitAnimation: ''
        
      },
      Card: {
          width: 200,
          marginTop: 10,
          marginBottom: 10,
          background: 'linear-gradient(45deg, #383939 30%, #444545 90%)',
          color: '#f9b1ae'
      }
  });

const CardBoxes = () => {
const classes = useStyles();
    return (
        <div>
        <div className={classes.root}>

            <Card className={classes.Card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                    HTML
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.Card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                    Javascript
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.Card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                    Css
                    </Typography>
                </CardContent>
            </Card>
            </div>
            <div className={classes.root}>
            <Card className={classes.Card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                    React
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.Card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                    HTML
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.Card}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                    HTML
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </div>
);
}

export default CardBoxes;