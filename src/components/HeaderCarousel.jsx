import React from 'react';
import Carousel from 'react-material-ui-carousel';
import items from '../assets/items';
import Item from '../components/Item';

function HeaderCarousel() {
  return (
    <Carousel
        next={ (next, active) => (`${active}, ${next}`) }
        prev={ (prev, active) => (`${active}, ${prev}`) }
        interval={70000}
    >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
  )
}

export default HeaderCarousel;