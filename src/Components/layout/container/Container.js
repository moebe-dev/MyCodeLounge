import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';


const useStyles = makeStyles({
  root: {
      textAlign: "center", 
      
  },
  header: {
    fontSize: '4rem',
    color: "#5bc8af",
    textAlign: 'center',
    textShadow: 10, 
  },
  title: {
    fontSize: '4rem'
    
  }, 
  subtitle: {

  }
});


export default function container() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" disableGutters>
      <Box boxShadow={8}>
        <Typography className={classes.root} component="div" style={{ backgroundColor: '#0c090d' , color: "white" , height: 600,  marginTop: 100}} >
          <Typography className= {classes.title}>
            Wanting to learn how to code? 
          </Typography>
          <Typography className={classes.subtitle}> 
            blah blahblah
          </Typography>
        <img src="" alt="code" /></Typography>
      </Box>        
      <Typography className={classes.header}>
          Topics we focus on
        </Typography>
      </Container>
    </React.Fragment>
  );
}