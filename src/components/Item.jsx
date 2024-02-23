import React from 'react';
import { Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DiscoverCard from './DiscoverCard';

function Item(props) {

    const theme = createTheme();

    theme.typography.h1 = {
        fontSize: '2rem',
        // '@media (min-width:600px)': {
        //     fontSize: '4rem',
        // },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: '2rem',
        // },
    };

  return (
    <ThemeProvider theme={theme}>
        <Paper 
            sx={{
                backgroundImage: { xs: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.item.img})`, md: `linear-gradient(${props.item.gradient}),url(${props.item.img})` },
                backgroundSize: 'cover', 
                backgroundPosition: { xs: `${props.item.bgPosition}`, sm: 'center' }, 
                backgroundAttachment: { xs: 'unset', md: 'fixed' },
                height: '100vh',
                borderRadius: 0
            }}
        >
            <Box sx={{
                height: '100% ',
                display: 'flex',
                flexDirection: `${props.item.direction}`
            }}>
                <DiscoverCard variant='h1' name={props.item.name} description={props.item.description} direction={props.item.direction} buttonTitle={props.item.buttonTitle} buttonLink={props.item.buttonLink} />
            </Box>
        </Paper>
    </ThemeProvider>
  )
}

export default Item;