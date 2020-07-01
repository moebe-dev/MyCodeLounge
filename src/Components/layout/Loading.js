import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularUnderLoad() {
  return <CircularProgress size="6rem" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}disableShrink />;
}

