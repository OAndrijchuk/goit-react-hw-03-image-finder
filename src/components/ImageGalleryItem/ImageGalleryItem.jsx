import React from 'react';
import { GaleryItem, ItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <GaleryItem className="gallery-item">
      <ItemImg
        src={webformatURL}
        alt={tags}
        width="200"
        data-big-img={largeImageURL}
      />
    </GaleryItem>
  );
};
