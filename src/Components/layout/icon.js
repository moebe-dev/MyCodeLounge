import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsSize() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeIcon style={{ fontSize: 40 }}/> 
      <p style= {{ fontSize: 30, color:'#FF6347', }}><h2>My Code Lounge</h2></p>
    
    </div>
  );
}