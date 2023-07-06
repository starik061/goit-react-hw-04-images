import React, { useState } from 'react';
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImgStyle,
} from './ImageGallery.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ modalUrl, url }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <ImageGalleryItemStyle>
      <ImageGalleryItemImgStyle
        onClick={() => {
          setOpenModal(true);
        }}
        src={url}
      />
      {openModal && <Modal onClose={closeModal} modalUrl={modalUrl} />}
    </ImageGalleryItemStyle>
  );
};
