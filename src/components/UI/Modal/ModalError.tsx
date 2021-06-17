import ReactDOM from 'react-dom';

import { Backdrop } from '../../../styles/components/UI/Modal/BackdropModal';

const ModalError: React.FC = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root') as HTMLDivElement
      )}
    </>
  );
};

export default ModalError;
