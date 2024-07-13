
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCanvasContext } from '../../context/canvasContext';
import PaymentDetails from '../modals/payment';
import { MEM_TYPES } from '../../utils/constants';

function SideCanvas() {
  const { displayCanvas, setDisplayCanvas, canvasContent } = useCanvasContext();
  const handleClose = () => setDisplayCanvas(false);
  const renderComp = () => {
    let comp = <></>;
    switch(canvasContent.type) {
        case MEM_TYPES.PAYMENT:
            comp = <PaymentDetails id={canvasContent.data.id} comment={canvasContent.data.comment}   />
            break;
        default:
            comp = <></>
            break;
    }
    return comp;
  }
  return (
    <>
      <Offcanvas show={displayCanvas} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{canvasContent.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            renderComp()
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideCanvas;