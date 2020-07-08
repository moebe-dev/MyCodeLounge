import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth0 } from "../../../react-auth0-spa";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#01b4bc",
    color: "#ffffff",
    margin: 10, 
    padding: 10,
    fontSize: "1.4rem",
    borderRadius: 5
  }
})



export default function SimpleMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const {logout} = useAuth0();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    logout();
  };

  return (
  
    <div>
      <Button className={classes.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
        Account
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={""}>My Favorites</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <MenuItem onClick={""}>Contact Us</MenuItem>
      </Menu>
    </div>
  );
}