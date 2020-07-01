import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ffffff',
    '& > *': {
      margin: theme.spacing(10),
    },
  },
}));

export default function Switches(props) {
  let { state, setState } = props

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Typography  style= {{display: 'flex', flexDirection: 'column'}}>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>YouTube
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>Google Books
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        name="checkedB"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>Udemy
      <Switch
        checked={state.checkedC}
        onChange={handleChange}
        name="checkedC"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>W3 Schools
      <Switch
        checked={state.checkedD}
        onChange={handleChange}
        name="checkedD"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>Stack Overflow
      <Switch
        checked={state.checkedE}
        onChange={handleChange}
        name="checkedE"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      
    </Typography>
  );
}