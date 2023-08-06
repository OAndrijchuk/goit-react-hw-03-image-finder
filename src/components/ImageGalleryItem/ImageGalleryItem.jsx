import React from 'react';
import PropTypes from 'prop-types';
import { GaleryItem, ItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onShowBigImg,
}) => {
  return (
    <GaleryItem className="gallery-item">
      <ItemImg
        src={webformatURL}
        alt={tags}
        width="200"
        onClick={() => onShowBigImg(largeImageURL)}
      />
    </GaleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onShowBigImg: PropTypes.func.isRequired,
};
