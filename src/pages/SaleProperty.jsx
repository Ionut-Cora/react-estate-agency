import React, { useEffect, useState } from 'react';
import saleItems from '../assets/saleItems';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import RentSaleProperty from '../components/RentSaleComponents/RentSaleProperty';
import MortgageCalculator from '../components/MortgageCalculator';
import { Box } from '@mui/material';

function SaleProperty() {

  const {id} = useParams();
  const [saleProperty, setSaleProperty] = useState(null);

  useEffect(() => {

    let saleProperty = saleItems.find(saleProperty => saleProperty.id === parseInt(id));

    if (saleProperty) {
      setSaleProperty(saleProperty);
    }

  }, [id])

  return (
    <Box>
      <Navigation />

      {
        saleProperty ? (
          <Box>
            <RentSaleProperty propertyAddress={saleProperty.address} propertyImage={saleProperty.image1} propertyImages={saleProperty.images} propertyPrice={saleProperty.price} propertyLongDescription={saleProperty.longDescription} propertyBedrooms={saleProperty.bedrooms} propertyBathrooms={saleProperty.bathrooms} propertyLivingrooms={saleProperty.livingrooms} />
  
            <MortgageCalculator fullPropertyPrice={saleProperty.price} />
          </Box>
        ) : (
          null
        )
      }
      
      <Footer />
    </Box>
  )
}

export default SaleProperty;