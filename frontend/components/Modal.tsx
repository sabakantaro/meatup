import React, { useState, useRef, useEffect } from "react";

const Modal = ({ onClose, children }: any) => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleBackgroundClick = (e: any) => {
    // @ts-ignore
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleBackgroundClick);

    return () => {
      document.removeEventListener("mousedown", handleBackgroundClick);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
      <div className='bg-white p-4 rounded-lg z-50' ref={modalRef}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
