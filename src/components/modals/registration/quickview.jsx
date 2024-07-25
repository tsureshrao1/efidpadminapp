import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { usePopupContext } from '../../../context/popupContext';
import HorseDetails from './horses/horseDetails';
import RiderDetails from './riders/riderDetails';
import MemberDetails from './memberDetails';
import { getRiderDetailsById, getHorseDetailsById } from '../../../services/apiService';
export default function Popup() {
    const { displayPopup, setDisplayPopup, popupContent } = usePopupContext();
    const [loadComponent, setLoadComponent] = useState(false);
    const { regReqType, getId, details, title } = popupContent;
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const handleClose = async () => {
        setLoadComponent(false);
        setDisplayPopup(false);
    };
    const getMoredetails = async () => {
        let response = {};
        if(details) {
            response = {...details}
        } else if(getId) {
            if(regReqType === 'HORSE') {
                response = await getHorseDetailsById(getId);
            } else if (regReqType === 'RIDER') {
                response = await getRiderDetailsById(getId);
            }
        }
        setData(response);
        setLoadComponent(true);
    }
    useEffect(() => {
        getMoredetails();
    }, [popupContent])
  const renderComp = () => {
    let comp = <></>;
    switch(regReqType) {
        case 'CLUB':
            comp = <MemberDetails data={data} regReqType={regReqType} setError={setError} setShow={setDisplayPopup} />
            break;
        case 'INST':
            comp = <MemberDetails data={data} regReqType={regReqType} setError={setError} setShow={setDisplayPopup} />
            break;
        case 'INDI':
            comp = <MemberDetails data={data} regReqType={regReqType} setError={setError} setShow={setDisplayPopup} />
            break;
        case 'LIFE':
            comp = <MemberDetails data={data} regReqType={regReqType} setError={setError} setShow={setDisplayPopup} />
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
      <Modal show={displayPopup} onHide={handleClose}>
      {
          error ? (
            <></>
          ) : (<>
            <Modal.Header closeButton>
              <Modal.Title style={{
                color: 'black'
              }}>
                {title}!
              </Modal.Title>
            </Modal.Header>
            {
                loadComponent && (<Modal.Body>
                    {
                        renderComp()
                    }
                    <div class="col-md-12 text-end mt-2">
                        <div class="mb-3 text-start">
                            <label class="form-label" for="">Admin Comment</label>
                            <p>{data?.approvedComment?.split('@_&_@')[0]}</p>
                        </div>
                    </div>
                    <div class="col-md-12 text-end mt-2">
                        <div class="mb-3 text-start">
                            <label class="form-label" for="">Secretary General Comment</label>
                            <p>{data?.approvedComment?.split('@_&_@')[1]}</p>
                        </div>
                    </div>
                </Modal.Body>)
            }
          </>)
        }
        
      </Modal>
    </>
  );
}