import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginButton from '../LoginButton';
import CustomizedInputBase from '../search';
import Logo from '../Logos/Logo'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#1C1E1E',
      },
    },
    
  },
});

export default function ButtonAppBar() {
 

  return (
    <ThemeProvider theme={theme}>
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Logo />
          </Typography>
          <CustomizedInputBase maxWidth="200px"/>
          <LoginButton />
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}