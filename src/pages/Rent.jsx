import React from 'react';
import RentItem from '../components/RentItem';
import Navigation from '../components/Navigation';
import { Container } from '@mui/material';
import SecondHeader from '../components/SecondHeader';
import RentHeaderImg from '../assets/images/rent-header-img.jpg';
import rentItems from '../assets/rentItems';
import Footer from '../components/Footer';

function Rent() {
  return (
    <div>
        <Navigation />
        <SecondHeader title='Rent a property' img={RentHeaderImg} imgPosition='bottom' direction='row-reverse' />
        <Container>
            {
                rentItems.map(item => <RentItem key={item.id} id={item.id} title={item.title} address={item.address} price={item.price} shortDescription={item.shortDescription} bedrooms={item.bedrooms} bathrooms={item.bathrooms} livingrooms={item.livingrooms} img={item.image1} />)
            }
        </Container>
        <Footer />
    </div>
  )
}

export default Rent;