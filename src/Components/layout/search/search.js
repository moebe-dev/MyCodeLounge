import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px",
    marginLeft: "50px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 1500,
    height: 30,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [query, setAnswers] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setAnswers(e.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        onChange={handleInputChange}
        onKeyPress={(ev) => {
          if (ev.key === "Enter") {
            ev.preventDefault();
            props.getQueryTopic(query);
          }
        }}
        type="text"
        value={query}
      />
      <IconButton
        type="button"
        className={classes.iconButton}
        aria-label="search"
        onClick={() => props.getQueryTopic(query)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
