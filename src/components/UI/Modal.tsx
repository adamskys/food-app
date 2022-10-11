import ReactDOM from 'react-dom';
import Styles from './style/Modal';

export interface Props {
  onClose?: () => void;
  children?: React.ReactNode;
}

const Backdrop: React.FC<Props> = (props) => {
  return <Styles.Backdrop onClick={props.onClose} />;
};

const ModalOverlay: React.FC<Props> = (props) => {
  return (
    <Styles.Modal>
      <div>{props.children}</div>
    </Styles.Modal>
  );
};

const portalElement = document.getElementById('overlay');

const Modal: React.FC<Props> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
