import React from 'react';
import { Box, Typography } from '@mui/material';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';

function PropertyIcons(props) {
  return (
    <Box sx={{
        display: 'flex'
    }}>
        <Box sx={{
            display: 'flex'
        }}>
            <BedOutlinedIcon />
            <Typography 
                variant='body1'
                sx={{
                    fontWeight: 'bold',
                    marginLeft: '4px'
                }}
            >
                {props.bedrooms}
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            marginX: '1rem'
        }}>
            <BathtubOutlinedIcon />
            <Typography 
                variant='body1'
                sx={{
                    fontWeight: 'bold',
                    marginLeft: '4px'
                }}
            >
                {props.bathrooms}
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex'
        }}>
            <ChairOutlinedIcon />
            <Typography 
                variant='body1'
                sx={{
                    fontWeight: 'bold',
                    marginLeft: '4px'
                }}
            >
                {props.livingrooms}
            </Typography>
        </Box>
    </Box>
  )
}

export default PropertyIcons;