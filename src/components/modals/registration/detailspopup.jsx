import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { approveUser, approveHorse, approveRider } from '../../../services/apiService';
import { useAppContext } from '../../../context';
import { toast } from 'react-toastify';
import { USER_ROLES, USER_STATUS } from '../../../utils/constants';
import HorseDetails from './horses/horseDetails';
import RiderDetails from './riders/riderDetails';
import MemberDetails from './memberDetails';
export default function RegisterDetailsPopup({data, setCount, count, regReqType, setShowdetailsPopup}) {
  const {state} = useAppContext();
  const { approvedComment } = data;
  const { userData } = state;
  const [show, setShow] = useState(true);
  const [error, setError] = useState(false);
  const [reason, setReason] = useState();
  const handleClose = async () => {
    setShowdetailsPopup(false);
  };
  const handleSubmit = async () => {
    try {
      const requestObj = { ...data };
      const status = userData.userRole === USER_ROLES.ADMIN ? USER_STATUS.REVIEW : USER_STATUS.PUBLISH;
      requestObj.approvedComment = userData.userRole === USER_ROLES.ADMIN ? `${new Date().toLocaleString()}: ${userData.userName}: ${reason}` : `${new Date().toLocaleString()}: ${userData.userName}: ${reason}@_&_@${approvedComment}`;
      if(regReqType === 'HORSE') {
        requestObj.horseStatus = status;
        await approveHorse(requestObj);
      } else if(regReqType === 'RIDER') {
        requestObj.riderStatus = status;
        await approveRider(requestObj);
      } else {
        requestObj.status = status;
        await approveUser(requestObj);
      }
      toast.success("Approved successfully!");
      setCount(count + 1);
      setShowdetailsPopup(false);
    } catch(error) {
      toast.error(error);
    }
  };

  const renderComp = () => {
    let comp = <></>;
    switch(regReqType) {
        case 'CLUB':
            comp = <MemberDetails data={data} regReqType={regReqType} setError={setError} setShow={setShow} setShowdetailsPopup={setShowdetailsPopup} />
            break;
        case 'INST':
            comp = <MemberDetails data={data} regReqType={regReqType} setError={setError} setShow={setShow} setShowdetailsPopup={setShowdetailsPopup} />
            break;
        case 'INDI':
            comp = <MemberDetails data={data} regReqType={regReqType} setError={setError} setShow={setShow} setShowdetailsPopup={setShowdetailsPopup} />
            break;
        case 'LIFE':
            comp = <MemberDetails data={data} regReqType={regReqType} setError={setError} setShow={setShow} setShowdetailsPopup={setShowdetailsPopup} />
            break;
        case 'HORSE':
            comp = <HorseDetails data={data} />
            break;
        case 'RIDER':
            comp = <RiderDetails data={data} />
            break;
        default:
            comp = <></>
            break;
    }

    return comp;
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
      {
          error ? (
            <></>
          ) : (<>
            <Modal.Header closeButton>
              <Modal.Title style={{
                color: 'black'
              }}>
                Details!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    renderComp()
                }
                {
                  userData.userRole === USER_ROLES.SEC_ADMIN && (
                    <div class="col-md-12 text-end mt-2">
                      <div class="mb-3 text-start">
                          <label class="form-label" for="">Admin Comment</label>
                          <p>{approvedComment?.split('@_&_@')[0]}</p>
                      </div>
                    </div>
                  )
                }
                <div class="col-md-12 text-end mt-2">
                    <div class="mb-3 text-start">
                        <label class="form-label" for="">Reason</label>
                        <textarea class="form-control" id="OtherDetails" rows="2" value={reason} onChange={(e) => {setReason(e.target.value)}} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => {handleSubmit(false)}}>
                Reject
              </Button>
              <Button variant="primary" onClick={() => {handleSubmit(true)}}>
                Approve
              </Button>
            </Modal.Footer>
          </>)
        }
        
      </Modal>
    </>
  );
}