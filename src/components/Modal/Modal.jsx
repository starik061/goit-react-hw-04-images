import { useEffect } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, modalUrl }) => {
  useEffect(() => {
    const handleEscapeKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscapeKeydown);
    return () => {
      window.removeEventListener('keydown', handleEscapeKeydown);
    };
  }, [onClose]);

  const handleOverlayClick = () => {
    onClose();
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer src={modalUrl} />
    </Overlay>,
    modalRoot
  );
};
