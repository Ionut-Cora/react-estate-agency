import React from 'react';
import SecondHeaderItem from './SecondHeaderItem';
import { Box } from '@mui/material';

function SecondHeader(props) {
  return (
    <Box>
        <SecondHeaderItem secondHeaderTitle={props.title} secondHeaderImg={props.img} imgPosition={props.imgPosition} direction={props.direction} />
    </Box>
  )
}

export default SecondHeader;