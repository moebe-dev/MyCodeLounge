import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



export default function container() {

  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" disableGutters>
        <Typography component="div" style={{ backgroundColor: '#383939' , color: "white" , height: 400,  marginTop: 100}} >
        </Typography>
      </Container>
    </React.Fragment>
  );
}