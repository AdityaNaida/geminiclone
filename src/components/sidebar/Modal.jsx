//styles
import "./Modal.css";

const Modal = ({ children, off }) => {
  return (
    <>
      <div className="backdrop" onClick={off} />
      {children}
    </>
  );
};

export default Modal;
