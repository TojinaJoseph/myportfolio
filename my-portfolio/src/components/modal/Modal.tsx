
import { ReactNode } from 'react';
import './Modal.css'; // We'll define the modal styles here

interface ModalProps{
    show:boolean,
    onClose:()=>void,
    children:ReactNode
}

const Modal: React.FC<ModalProps>  = ({show, onClose,children}) => {
  // If the modal is not shown, return null (nothing to render)
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;