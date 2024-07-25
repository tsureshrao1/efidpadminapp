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
export default function RegisterDetailsPopup({dataObj, setCount, count, regReqType, setShowdetailsPopup}) {
  const {state} = useAppContext();
  const[data, setData] = useState(dataObj);
  const { approvedComment } = data;
  const { userData } = state;
  const [show, setShow] = useState(true);
  const [error, setError] = useState(false);
  const [reason, setReason] = useState();
  const handleClose = async () => {
    setShowdetailsPopup(false);
  };
  const handleSubmit = async (approve) => {
    try {
      const requestObj = { ...data };
      let status =  '';
      if(regReqType === 'HORSE') {
        status = requestObj.horseStatus;
      } else if(regReqType === 'RIDER') {
        status = requestObj.riderStatus;
      } else {
        status = requestObj.status;
      }
      if(approve) {
        status = userData.userRole === USER_ROLES.ADMIN
          ? status.replace(USER_STATUS.REGISTER, USER_STATUS.REVIEW)
          : USER_STATUS.ACTIVE;
      } else {
        if(!reason) {
          toast.error("Reason is mandatory for reject");
          return;
        }
        status = userData.userRole === USER_ROLES.ADMIN
          ? status.replace(USER_STATUS.REGISTER, USER_STATUS.REJECT)
          : status.replace(USER_STATUS.REVIEW, USER_STATUS.REJECT);
      }
      requestObj.approvedComment = approvedComment ? `${new Date().toLocaleString()}: ${userData.userName}: ${reason}@_&_@${approvedComment}` : `${new Date().toLocaleString()}: ${userData.userName}: ${reason}`;
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
      toast.success("Updated successfully!");
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
            comp = <HorseDetails data={data} setData={setData} />
            break;
        case 'RIDER':
            comp = <RiderDetails data={data} setData={setData} />
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
                {approvedComment && (
                  <div className="col-md-12 text-end mt-2">
                    <div className="mb-3 text-start">
                        <label className="form-label">Comments</label>
                        {approvedComment?.split('@_&_@')?.map((comment, index) => (
                          <p key={index}>{comment}</p>
                        ))}
                    </div>
                  </div>
                )
                }
                <div className="col-md-12 text-end mt-2">
                    <div className="mb-3 text-start">
                        <label className="form-label">Reason</label>
                        <textarea className="form-control" id="OtherDetails" rows="2" value={reason} onChange={(e) => {setReason(e.target.value)}} />
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