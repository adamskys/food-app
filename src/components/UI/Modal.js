import ReactDOM from 'react-dom';
import Styles from './style/Modal';

const Backdrop = (props) => {
  return <Styles.Backdrop />;
};

const ModalOverlay = (props) => {
  return (
    <Styles.Modal>
      <div>{props.children}</div>
    </Styles.Modal>
  );
};

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
