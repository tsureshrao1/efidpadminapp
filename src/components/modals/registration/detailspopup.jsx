import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { approveUser, approveHorse, approveRider, updateClub, updateInst, updateIndi, updateLife } from '../../../services/apiService';
import { useAppContext } from '../../../context';
import { toast } from 'react-toastify';
import { USER_ROLES, USER_STATUS } from '../../../utils/constants';
import HorseDetails from './horses/horseDetails';
import RiderDetails from './riders/riderDetails';
import MemberDetails from './memberDetails';
import { useParams } from 'react-router-dom';
import ConfirmModal from '../confirm';
export default function RegisterDetailsPopup({dataObj, setCount, count, regReqType, setShowdetailsPopup}) {
  const {state} = useAppContext();
  const {requestType} = useParams();
  const [showConfirm, setShowConfirm] = useState(false)
  const[data, setData] = useState(dataObj);
  let approvedComment = data?.approvedComment || data?.efiUsers?.approvedComment || data?.efiUser?.approvedComment;
  let initialstatus = data.status || data.horseStatus || data.riderStatus;
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
        if(approve) {
          let validEFI = requestObj?.efiRegistrationNumber?.match(/^[H][0-9]+$/)?.length;
          if(validEFI != 1) {
              toast.error('Enter valid EFI Member Number. i.e Should start with H followed by number');
              return;
          }
        }
        status = requestObj.horseStatus;
      } else if(regReqType === 'RIDER') {
        if(approve) {
          let validEFI = requestObj?.efiRegistrationNumber?.match(/^[P][0-9]+$/)?.length;
          if(validEFI != 1) {
              toast.error('Enter valid EFI Member Number. i.e Should start with P followed by number');
              return;
          }
        }
        status = requestObj.riderStatus;
      } else {
        if(approve && !requestObj?.efiMemberNumber?.length) {
          toast.error('EFI Member Number is mandatory for approve.');
          return;
        }
        if(requestType) {
          status = requestObj?.efiUsers?.status || requestObj?.efiUser?.status;
        } else {
          status = requestObj?.status
        }
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
      requestObj.approvedComment = approvedComment ?
        reason ?
          `${new Date().toLocaleString()}: ${userData.userName}: ${reason}@_&_@${approvedComment}` :
          `${approvedComment}` :
        reason ? 
          `${new Date().toLocaleString()}: ${userData.userName}: ${reason}` :
          '';
      if(regReqType === 'HORSE') {
        requestObj.horseStatus = status;
        await approveHorse(requestObj);
      } else if(regReqType === 'RIDER') {
        requestObj.riderStatus = status;
        await approveRider(requestObj);
      } else {
        requestObj.status = status;
        const { efiUsers, efiUser } = requestObj;
        switch(regReqType) {
          case 'CLUB':
            efiUsers.status = status;
            efiUsers.approvedComment = requestObj.approvedComment;
            if(requestType) {
              await approveUser(efiUsers);
            }
            await updateClub(requestObj)
              break;
          case 'INST':
            efiUser.status = status;
            efiUser.approvedComment = requestObj.approvedComment;
            if(requestType) {
              await approveUser(efiUser);
            }
            await updateInst(requestObj);
              break;
          case 'INDI':
            efiUser.status = status;
            efiUser.approvedComment = requestObj.approvedComment;
            if(requestType) {
              await approveUser(efiUser);
            }
            await updateIndi(requestObj);
              break;
          case 'LIFE':
            efiUser.status = status;
            efiUser.approvedComment = requestObj.approvedComment;
            if(requestType) {
              await approveUser(efiUser);
            }
            await updateLife(requestObj)
              break;
          default:
              break;
        }
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
            comp = <MemberDetails data={data} setData={setData} regReqType={regReqType} setError={setError} setShow={setShow} setShowdetailsPopup={setShowdetailsPopup} />
            break;
        case 'INST':
            comp = <MemberDetails data={data} setData={setData} regReqType={regReqType} setError={setError} setShow={setShow} setShowdetailsPopup={setShowdetailsPopup} />
            break;
        case 'INDI':
            comp = <MemberDetails data={data} setData={setData} regReqType={regReqType} setError={setError} setShow={setShow} setShowdetailsPopup={setShowdetailsPopup} />
            break;
        case 'LIFE':
            comp = <MemberDetails data={data} setData={setData} regReqType={regReqType} setError={setError} setShow={setShow} setShowdetailsPopup={setShowdetailsPopup} />
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
            
            {
              ((userData.userRole === USER_ROLES.ADMIN && initialstatus?.includes(USER_STATUS.REGISTER) ||
              (userData.userRole === USER_ROLES.ADMIN && initialstatus?.includes(USER_STATUS.ACTIVE) && regReqType == 'HORSE')) || 
              (userData.userRole === USER_ROLES.SEC_ADMIN && initialstatus?.includes(USER_STATUS.REVIEW)) || requestType) && (
                <Modal.Footer>
                  <Button variant="danger" onClick={() => {setShowConfirm(true)}}>
                    Reject
                  </Button>
                  <Button variant="primary" onClick={() => {handleSubmit(true)}}>
                    Approve
                  </Button>
                </Modal.Footer>
              )
            }
            
          </>)
        }
        
      </Modal>
      <ConfirmModal onConfirm={() => handleSubmit(false)} display={showConfirm} setDisplay={setShowConfirm} />
    </>
  );
}