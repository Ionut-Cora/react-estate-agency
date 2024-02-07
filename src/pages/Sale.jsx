import React from 'react';
import SaleItem from '../components/SaleItem';
import Navigation from '../components/Navigation';
import { Container } from '@mui/material';
import SecondHeader from '../components/SecondHeader';
import SaleHeaderImg from '../assets/images/sale-header-img.jpg';
import saleItems from '../assets/saleItems';
import Footer from '../components/Footer';

function Sale() {
  return (
    <div>
        <Navigation />
        <SecondHeader title='Properties for sale' img={SaleHeaderImg} imgPosition='bottom' />
        <Container>
          {
                saleItems.map(item => <SaleItem key={item.id} id={item.id} title={item.title} address={item.address} price={item.price} shortDescription={item.shortDescription} bedrooms={item.bedrooms} bathrooms={item.bathrooms} livingrooms={item.livingrooms} img={item.image1} />)
            }
        </Container>
        <Footer />
    </div>
  )
}

export default Sale;