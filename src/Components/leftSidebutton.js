import React, { Component } from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import API from "../utils/API";

import lightBlue from '@material-ui/core/colors/blue';



const BootstrapButton = withStyles({
  root: {
    borderRadius: '150px',
    textTransform: 'none',
    fontSize: '4rem',
    padding: '20px',
    lineHeight: 1.5,
    // backgroundColor: '#E6E600',
    // borderColor: '#E6E600',
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

  },
})(Button);

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   },
// }))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
  
  },

}));

// const theme = createMuiTheme({
//   palette: {
//     primary: orange,
//   },
// });


export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div style= {{display: 'flex', flexDirection: 'column',justifyContent: 'space-between',}}>
      {/* <ColorButton variant="contained" color="primary" className={classes.margin}>
      CSS
      <ion-icon name="logo-css3"></ion-icon>
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
        HTML
        <ion-icon name="logo-html5"></ion-icon>
        </Button>
      </ThemeProvider> */}


      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
      
      <ion-icon name="logo-html5"></ion-icon>
      </BootstrapButton>

      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
      
      <ion-icon name="logo-css3"></ion-icon>
      </BootstrapButton>
      <BootstrapButton  variant="contained" color="primary" className={classes.margin} 
      >
      
      <ion-icon name="logo-javascript"></ion-icon>
      </BootstrapButton>
      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
      
      <i class="devicon-jquery-plain"></i>
      </BootstrapButton>

      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
      
      <ion-icon name="logo-react"></ion-icon>  
      </BootstrapButton>

      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
      
      <ion-icon name="logo-nodejs"></ion-icon>
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
