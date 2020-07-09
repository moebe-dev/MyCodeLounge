import React from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

export default function LoginButton(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const options = ["My Favorites", "Logout"];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      logout();
      return;
    }

    setOpen(false);
  };

  const handleFavoriteClicked = () => {
    props.getFavClicked();
  };

  const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // text: {
        //   display:'flex',
        //   backgroundColor: '#f3faf0',
        //   color: '#444545',
        //   borderColor: '#b5ffe9',
        //   borderRadius: 6,
        //   border: 6,
        //   height: 20,
        //   padding: 15,
        // },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            color="primary"
            ref={anchorRef}
            aria-label="split button"
          >
            {!isAuthenticated && (
              <Button
                variant="outlined"
                size="medium"
                color="inherit"
                onClick={() => loginWithRedirect({})}
              >
                Log in
              </Button>
            )}
            {isAuthenticated ? (
              <>
                <Button
                  style={{ maxHeight: "40px" }}
                  variant="outlined"
                  size="medium"
                  color="inherit"
                >
                  <p>{user ? <p>{user.name}</p> : <div></div>}</p>
                </Button>

                <Button
                  style={{ maxHeight: "40px" }}
                  variant="outlined"
                  size="medium"
                  color="inherit"
                  // color="primary"
                  // size="small"
                  aria-controls={open ? "split-button-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </>
            ) : (
                <></>
              )}
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={""}>
                    <MenuList id="split-button-menu">
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          <Button
                            href={
                              option === "My Favorites"
                                ? "#"
                                : option === "Logout"
                                  ? { handleClose }
                                  : "#"
                            }
                            onClick={
                              option === "My Favorites"
                                ? handleFavoriteClicked
                                : option === "logout"
                                  ? loginWithRedirect
                                  : false
                            }
                          >
                            {option}
                          </Button>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
