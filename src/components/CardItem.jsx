import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { red } from '@mui/material/colors';

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
                textTransform: 'capitalize'
            }}
        >
            {props.title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
                textTransform: 'uppercase'
            }}
        >
            {props.address}
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary"
            sx={{
                fontWeight: 'bold',
                color: red[500]
            }}
        >
            £{props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardItem;