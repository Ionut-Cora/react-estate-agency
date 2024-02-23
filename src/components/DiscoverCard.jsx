import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { orange } from '@mui/material/colors';

function DiscoverCard(props) {
  return (
    <Box sx={{
        height: '100%',
        width: { xs: '100%', md: '50%' },
        display: 'flex',
        position: 'relative',
        flexDirection: `${props.direction}`
    }}>
        <Box sx={{
            height: '100%',
            width: '50%',
            backgroundColor: { xs: '', sm: 'rgba(255, 255, 255, 0.75)' }
        }}>
            <Card sx={{ 
                minWidth: { xs: '200px', sm: '275px' },
                minHeight: 300,
                position: 'absolute',
                top: '50%',
                right: '50%',
                transform: 'translate(50%, -50%)',
                padding: { xs: '1rem', sm: '2rem' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: orange[800],
                borderRadius: '0'
            }}>
                <CardContent sx={{
                    padding: 0
                }}>
                    <Typography 
                        variant={props.variant}
                        sx={{
                            textTransform: 'capitalize',
                            color: 'white',
                            marginBottom: '1rem'
                        }}
                    >
                        {props.name}
                    </Typography>
                    <Typography 
                        variant='body1' 
                        color='white'
                        sx={{
                            marginBottom: '1rem'
                        }}
                    >
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    padding: 0
                }}>
                    <Link to={props.buttonLink} style={{textDecoration: 'none'}}>
                        <Button 
                            variant='outlined'
                            sx={{
                                marginTop: '2rem',
                                color: 'white',
                                borderColor: 'white',
                                textAlign: 'center',
                                display: `${props.displayType}`,
                                '&:hover': {
                                    borderColor: 'white'
                                }
                            }}
                        >
                            {props.buttonTitle}
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
        <Box sx={{
            height: '100%',
            width: '50%'
        }}>
        </Box>
    </Box>
  )
}

export default DiscoverCard;