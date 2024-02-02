import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

function WhyChooseUsCard(props) {
  return (
    <Card 
        variant='outlined'
        sx={{
            width: { xs: '100%', md: '30%' },
            height: 'auto',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${props.backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            marginBottom: '1rem'
        }}
    >
        <CardContent sx={{
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingY: '2.5rem',
            paddingX: '1.5rem'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '2rem'
            }}>
                <img src={props.logo} style={{color: 'white'}} alt="" />

                <Typography 
                    variant='h3' 
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        marginTop: '0.3rem'
                    }}
                >
                    {props.title}
                </Typography>
            </Box>
            
            <Typography sx={{
                color: 'white'
            }}>
                {props.description}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default WhyChooseUsCard;