import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ffffff',
    '& > *': {
      margin: theme.spacing(10),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();


// button color needs to be fixed
  
  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="grey" aria-label="contained primary button group">
        <Button><ion-icon name="logo-github"></ion-icon></Button>
        <Button><i class="devicon-heroku-line-wordmark"></i></Button>
        <Button><ion-icon name="logo-ionitron"></ion-icon></Button>
      </ButtonGroup>
    </div>
  );
}