import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function ContactCard(props) {
  return (
    <Card 
        variant='outlined' 
        sx={{
            width: { xs: '100%', sm: '30%' },
            height: 'auto',
            marginBottom: { xs: '1rem', sm: '0' }
        }}
    >
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <img src={props.icon} alt="" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Button 
            component='a'
            href={props.url}
            sx={{
                textAlign: 'center',
                fontWeight: '600',
                color: 'orange',
                overflowWrap: 'anywhere'
            }}
        >
            {props.description}
        </Button>
      </CardContent>
    </Card>
  )
}

export default ContactCard;