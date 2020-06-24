import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { green, purple, orange } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    borderRadius: '90px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#E6E600',
    borderColor: '#E6E600',
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
      backgroundColor: '#E6E600',
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
    margin: theme.spacing(1),
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
    <div style= {{display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}>
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
      <BootstrapButton  id= "javascriptbtn" variant="contained" color="primary" className={classes.margin}>
      JavaScript
      <ion-icon name="logo-javascript"></ion-icon>
      </BootstrapButton>

      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
      HTML
      <ion-icon name="logo-html5"></ion-icon>
      </BootstrapButton>
    </div>
  );
}