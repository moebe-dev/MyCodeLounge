import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



export default function container() {

  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" disableGutters>
      <Box boxShadow={8}>
        <Typography component="div" style={{ backgroundColor: '#121517' , color: "white" , height: 600,  marginTop: 100}} >
        <img src="" alt="code" /></Typography>

      </Box>        
      <Typography variant="h1" style={{color: '#121517',margin: 20, alignSelf: 'center',} }>
          Topics we focus on
        </Typography>
      </Container>
    </React.Fragment>
  );
}