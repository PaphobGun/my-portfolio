import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ isOpen, children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return isOpen && createPortal(<div>{children}</div>, el);
};

export default Modal;
