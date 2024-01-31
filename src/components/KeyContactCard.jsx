import React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

function KeyContactCard(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
        width: { xs: '100%', sm: '40%', md: '30%', lg: '45%' },
        marginBottom: { xs: '2rem', md: 0 }
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, lg: 167 },
          maxWidth: { xs: 350, lg: 250 },
        }}
        alt="person"
        src={props.img}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', lg: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {props.name}
        </Typography>
        <Typography variant='body2'>
            {props.title}
        </Typography>
        <Button 
            component='a' 
            href='mailto: react@example.com' 
            sx={{ 
                mt: 2, 
                padding: 0, 
                color: 'warning.main', 
                fontWeight: 'bold'
            }}>
            Email me
        </Button>
        <Box sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center'
        }}>
            <Typography sx={{ marginRight: '5px' }}>
                or call:
            </Typography>
            <Button 
                component='a' 
                href='tel:0900800700' 
                sx={{ 
                    color: 'warning.main', 
                    fontSize: 16, 
                    padding: 0,
                    fontWeight: 'bold'
                }}>
                {props.tel}
            </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default KeyContactCard;