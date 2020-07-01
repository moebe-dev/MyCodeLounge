import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginButton from '../buttons/LoginButton';
import CustomizedInputBase from '../search/search';
import Logo from '../../../assets/Logos/Logo'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';


// const theme = createMuiTheme({
//   grow: {
//     flexGrow: 1,
//   },
//   overrides: {
//     MuiAppBar: {
//       colorPrimary: {
//         backgroundColor: '#1C1E1E',
//         alignItems: 'space-between',
//       },
//     },

    
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    // <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static" disableGutters>
        <Toolbar>
          <Typography variant="h6">
            <Logo edge="start" className={classes.menuButton}/>
          </Typography>
          <CustomizedInputBase maxWidth="300px" alignItems="right"/>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </div>
    // </ThemeProvider>
  );
}