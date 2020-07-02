import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginButton from '../buttons/LoginButton';
import CustomizedInputBase from '../search/search';
import Logo from '../../../assets/Logos/Logo';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AccountBtn from '../buttons/accountBtn';


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
      <div>
      <AppBar  postition= "static" disableGutters>
        <Toolbar>
          <Typography variant="h6">
            <Logo edge= "start"/>
          </Typography>
          <CustomizedInputBase getQueryTopic={props.getQueryTopic} maxWidth="300px"/>
          <LoginButton />
          <AccountBtn/>
        </Toolbar>
      </AppBar>
      </div>
    </ThemeProvider>
  );
}