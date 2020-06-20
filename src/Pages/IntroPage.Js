import React from "react";
import { sizing } from '@material-ui/system';
import Container from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function SimpleContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Box width="100%">
            <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </Box>
      </React.Fragment>
    );
  }