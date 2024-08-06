import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModal({onConfirm, display, setDisplay}) {
  const [show, setShow] = useState(display);

  const handleClose = () => {
    setDisplay(false);
    setShow(false);
  };

  useEffect(() => {
    setShow(display)
  }, [display]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{
            color: 'black'
          }}>Confirm reject</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
            fontSize: '20px'
        }}>Are you sure you want to reject ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {onConfirm(); handleClose()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;