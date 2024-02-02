import React from 'react';
import ContactCard from './ContactCard';
import { Container } from '@mui/material';
import contactCards from '../../assets/contactCards';

function ContactCardsSection() {
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        marginBottom: { xs: '-1rem', sm: '0' }
    }}>
        {
            contactCards.map((item) => <ContactCard key={item.id} title={item.title} description={item.description} icon={item.icon} url={item.url} />)
        }
    </Container>
  )
}

export default ContactCardsSection;