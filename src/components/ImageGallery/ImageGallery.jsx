import React from 'react';
import { ImageGalleryStyle } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryImages }) => {
  return (
    <ImageGalleryStyle>
      {galleryImages.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            modalUrl={largeImageURL}
          />
        );
      })}
    </ImageGalleryStyle>
  );
};
