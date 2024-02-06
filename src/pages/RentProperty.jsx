import React, { useEffect, useState } from 'react';
import rentItems from '../assets/rentItems';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import RentSaleProperty from '../components/RentSaleComponents/RentSaleProperty';
import Footer from '../components/Footer';

function RentProperty() {

  const {id} = useParams();
  const [rentProperty, setRentProperty] = useState(null);

  useEffect(() => {
    
    let rentProperty = rentItems.find(rentProperty => rentProperty.id === parseInt(id));

    if (rentProperty) {
      setRentProperty(rentProperty);
    }
  }, [id])

  return (
    <div>
        <Navigation />

        {
          rentProperty ? (
            <RentSaleProperty propertyAddress={rentProperty.address} propertyImage={rentProperty.image1} propertyImages={rentProperty.images} propertyPrice={rentProperty.price} propertyLongDescription={rentProperty.longDescription} propertyBedrooms={rentProperty.bedrooms} propertyBathrooms={rentProperty.bathrooms} propertyLivingrooms={rentProperty.livingrooms} />
          ) : (
            null
          )
        }

        <Footer />
    </div>
  )
}

export default RentProperty;