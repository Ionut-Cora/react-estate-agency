import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { orange } from '@mui/material/colors';
import { Box } from '@mui/system';
import PropertyIcons from '../PropertyIcons';

function CardItem(props) {
  return (
    <Card sx={{ 
        width: 345,
        marginRight: '1rem',
        marginLeft: '1rem',
        marginBottom: '2rem'
     }}>
      <CardActionArea
        href={props.url}
      >
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="property image"
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="body1" 
            component="div"
            sx={{
                textTransform: 'capitalize',
                textAlign: 'center'
            }}
        >
            {props.title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
                textTransform: 'uppercase',
                textAlign: 'center'
            }}
        >
            {props.address}
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary"
            sx={{
                fontWeight: 'bold',
                color: orange[800],
                textAlign: 'center'
            }}
        >
            £{props.price}
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem'
          }}>
            <PropertyIcons bedrooms={props.itemBedrooms} bathrooms={props.itemBathrooms} livingrooms={props.itemLivingrooms} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardItem;