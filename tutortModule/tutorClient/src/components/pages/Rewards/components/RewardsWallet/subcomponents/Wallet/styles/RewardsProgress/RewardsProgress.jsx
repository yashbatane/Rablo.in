import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function RewardsProgress(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress sx={{color:"#6764ff"}} size={75} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Typography variant="caption" component="div" color="text.primary" sx={{ fontFamily: "Poppins",fontSize: "20px", fontWeight: "700", color: "#6764ff"}}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
export default RewardsProgress;