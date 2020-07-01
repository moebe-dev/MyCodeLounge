import React from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        backgroundColor: '#f3faf0',
        color: '#444545',
        borderColor: '#b5ffe9',
        borderRadius: 6,
        border: 6,
        height: 48,
        padding: '0 30px',
      },
    },
  },
});


export default function LoginButton() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();


  return (
    <ThemeProvider theme={theme}>
    <div>
      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect({})}>
          Log in
        </Button>
      )}

      {isAuthenticated && (
        <Button onClick={() => logout()}>
          <p>{user ? <p>{user.name}</p> : <div></div>}</p>
        </Button>
      )}
    </div>
    </ThemeProvider>
  );
};


