import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginButton from '../LoginButton';
import CustomizedInputBase from '../search';
import Logo from '../Logos/Logo'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AccountBtn from '../accountBtn'

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#1C1E1E',
      },
    },
    
  },
});

export default function ButtonAppBar(props) {

  return (
    <ThemeProvider theme={theme}>

      <AppBar  disableGutters>
        <Toolbar>
          <Typography variant="h6">
            <Logo />
          </Typography>
          <CustomizedInputBase getQueryTopic={props.getQueryTopic} maxWidth="300px"/>
          <LoginButton />
          <AccountBtn/>
        </Toolbar>
      </AppBar>
    
    </ThemeProvider>
  );
}