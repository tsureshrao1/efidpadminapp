import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getClubByUser, approveUser } from '../../../services/apiService';
import { Alert } from 'react-bootstrap';
import ClubMemberDetails from './clubmemberdetailspopup';
import InstituteMemberDetails from './institutememberdetailspopup';
import IndividualDetails from './individualmemberdetailspopup';
import LifeTimeIndividualDetails from './lifetimeIndividualDetailspopup';
import { toast } from 'react-toastify';
export default function RegisterDetailsPopup({userObj, setCount, count, regReqType, setShowdetailsPopup}) {
  const { userId, approvedComment } = userObj;
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [reason, setReason] = useState(approvedComment);
  const handleClose = async () => {
    setShowdetailsPopup(false);
  };
  const handleSubmit = async () => {
    try {
      const requestObj = { ...userObj };
      requestObj.status = 'ACTIVE';
      requestObj.approvedComment = reason;
      await approveUser(requestObj);
      toast.success("Approved successfully!");
      setCount(count + 1);
      setShowdetailsPopup(false);
    } catch(error) {
      toast.error(error);
    }
  };
  const [userData, setUserData] = useState({});

  const renderComp = () => {
    let comp = <></>;
    switch(regReqType) {
        case 'CLUB':
            comp = <ClubMemberDetails userData={userData} />
            break;
        case 'INST':
            comp = <InstituteMemberDetails userData={userData} />
            break;
        case 'INDI':
            comp = <IndividualDetails userData={userData} />
            break;
        case 'LIFE':
            comp = <LifeTimeIndividualDetails userData={userData} />
            break;
        default:
            comp = <></>
            break;
    }

    return comp;
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getClubByUser(regReqType, userId);
            setUserData(response.data);
            setShow(true);
            setError(false);
        } catch (err) {
            toast.error(err);
            setShow(false);
            setError(true);
            setShowdetailsPopup(false);
        }
    };

    fetchData();
  }, []);

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
                Member Details!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    renderComp()
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