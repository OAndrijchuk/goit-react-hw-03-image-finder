import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ photos, onShowBigImg }) => {
  return (
    <List className="gallery">
      {photos.map(photo => (
        <ImageGalleryItem
          {...photo}
          key={photo.id}
          onShowBigImg={onShowBigImg}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  onShowBigImg: PropTypes.func.isRequired,
};
