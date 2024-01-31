import React from 'react';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

function ImageGallerySlider(props) {
  return (
    <div>
        <ImageGallery 
            items={props.images}
            showPlayButton={false}
            // showFullscreenButton={false}
            slideOnThumbnailOver={true}
        />
    </div>
  )
}

export default ImageGallerySlider;