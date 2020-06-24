import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div style= {{display: 'flex', flexDirection: 'column'}}>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>YouTube
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>W3 Schools
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        name="checkedB"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      <div>Google Books
      <Switch
        checked={state.checkedC}
        onChange={handleChange}
        name="checkedC"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>Udemy
      <Switch
        checked={state.checkedD}
        onChange={handleChange}
        name="checkedD"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
      <div style= {{display: 'flex', justifyContent: 'flex-end'}}>Pixabay
      <Switch
        checked={state.checkedE}
        onChange={handleChange}
        name="checkedE"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
    </div>
  );
}