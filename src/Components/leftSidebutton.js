import React, { Component } from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { green, purple, orange } from '@material-ui/core/colors';
import API from "../utils/API";

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});


export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div style= {{display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        CSS
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          HTML
        </Button>
      </ThemeProvider>
      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
        JavaScript
      </BootstrapButton>
      
    </div>
  );
}


// class Button extends Component {
//   componentDidMount() {
//     API.getW3Refrence("css")
//        .then(res => {
//          this.setState({references: res})
//        });
//   }

//   render() { 
//     return ( 
//       this.state.references.map((key) => <Button reference={key}></Button>)
//      );
//   }
// }
