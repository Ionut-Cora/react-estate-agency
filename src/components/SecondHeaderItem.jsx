import React from 'react';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import DiscoverCard from './DiscoverCard';

function SecondHeaderItem(props) {

    const theme = createTheme();

    theme.typography.h1 = {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: red[500],
        fontSize: '2rem',
        '@media (min-width:600px)': {
            fontSize: '3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        },
    };

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{
            height: '75vh',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${props.secondHeaderImg})`,
            backgroundSize: 'cover', 
            backgroundPosition: `${props.imgPosition}`, 
            backgroundAttachment: { xs: 'unset', md: 'fixed' },
            display: 'flex',
            flexDirection: `${props.direction}`
        }}>
            <DiscoverCard name={props.secondHeaderTitle} variant='h1' displayType='none' direction={props.direction} />
        </Box>
    </ThemeProvider>
  )
}

export default SecondHeaderItem;