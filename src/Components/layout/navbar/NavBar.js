import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginButton from '../buttons/LoginButton';
import CustomizedInputBase from '../search/search';
import Logo from '../../../assets/Logos/Logo';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ResourceBtn from '../buttons/resourceBtn';
import {Link} from 'react-router-dom';
import { useAuth0 } from "../../../react-auth0-spa";

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
  const { isAuthenticated } = useAuth0();
  return (
    <ThemeProvider theme={theme}>
      <div>
      <AppBar  postition= "fixed" disableGutters>
        <Toolbar>
          <Typography variant="h6">
            <Link to = "/"><Logo edge= "start"/></Link>
          </Typography>
          
          {isAuthenticated ?(
          <>
          <CustomizedInputBase getQueryTopic={props.getQueryTopic} maxWidth="300px"/>
          <ResourceBtn />
</>) : <></>
}
<LoginButton getFavClicked={props.getFavClicked}/>
        </Toolbar>
      </AppBar>
      </div>
    </ThemeProvider>
  );
}
