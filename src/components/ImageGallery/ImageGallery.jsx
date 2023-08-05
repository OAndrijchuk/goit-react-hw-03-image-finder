import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ photos, onShowBigImg }) => {
  const handlePhoto = e => {
    if (e.target.dataset.bigImg) {
      onShowBigImg(e.target.dataset.bigImg);
    }
  };

  return (
    <List className="gallery" onClick={handlePhoto}>
      {photos.map(photo => (
        <ImageGalleryItem {...photo} key={photo.id} />
      ))}
    </List>
  );
};
