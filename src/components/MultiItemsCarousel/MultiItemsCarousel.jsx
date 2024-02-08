import React from 'react';
import './MultiItemsCarousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from './CardItem';
import cardsItems from '../../assets/cardsItems';
import { Box, Typography } from '@mui/material';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

function MultiItemsCarousel() {
  return (
    <Box sx={{margin: '3rem auto'}}>
      <Typography 
            variant='h2'
            sx={{
                fontSize: 'clamp(1.8rem, 1.3654rem + 0.9065vw, 2rem)',
                textTransform: 'uppercase',
                fontWeight: '600',
                marginBottom: '2rem',
                textAlign: 'center'
            }}
      >
            Recently added
      </Typography>
      <Carousel 
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
      >
          {
              cardsItems.map( (item, i) => <CardItem key={i} item={item} title={item.title} address={item.address} price={item.price} image={item.img} url={item.url} itemBedrooms={item.bedrooms} itemBathrooms={item.bathrooms} itemLivingrooms={item.livingrooms} /> )
          }
      </Carousel>
    </Box>
  )
}

export default MultiItemsCarousel;