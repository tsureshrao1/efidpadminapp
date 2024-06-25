import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import EventDetails from '../../../pages/events/eventDetails';
export default function EventDetailsPopup({eventObj, setCount, count, setShowdetailsPopup}) {
  const [show, setShow] = useState(true);
  const handleClose = async () => {
    setShowdetailsPopup(false);
  };
  const updateEventHandler = () => {
    handleClose();
    setCount(count + 1);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title style={{
                color: 'black'
              }}>
                Update Event
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EventDetails updateEventHandler={updateEventHandler} eventObj={eventObj} />
                {/* <div class="col-md-12 text-end mt-2">
                    <div class="mb-3 text-start">
                        <label class="form-label" for="">Reason</label>
                        <textarea class="form-control" id="OtherDetails" rows="2" value={reason} onChange={(e) => {setReason(e.target.value)}} />
                    </div>
                </div> */}
            </Modal.Body>
      </Modal>
    </>
  );
}