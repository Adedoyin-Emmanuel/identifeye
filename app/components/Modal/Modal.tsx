import React, { forwardRef, useImperativeHandle, useState } from "react";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
}

export interface ModalRef {
  showModal: () => void;
  closeModal: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(
  ({ className, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({
      showModal,
      closeModal,
    }));

    return (
      <dialog
        id={`modal_${ref}`}
        className={`modal ${className}`}
        open={isOpen}
      >
        <div className="modal-box box-shadow">
          <form method="dialog" className="modal-backdrop">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle shadow-none border-none outline-none bg-red-400  hover:bg-red-400 absolute right-2 top-2"
            >
              ✕
            </button>
          </form>

          {children}
        </div>
      </dialog>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
