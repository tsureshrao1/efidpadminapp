import { useState, useEffect } from 'react';
import { getClubByUser } from '../../../services/apiService';
import ClubMemberDetails from './clubmemberdetailspopup';
import InstituteMemberDetails from './institutememberdetailspopup';
import IndividualDetails from './individualmemberdetailspopup';
import LifeTimeIndividualDetails from './lifetimeIndividualDetailspopup';
import { toast } from 'react-toastify';
export default function MemberDetails({data, setData, regReqType, setShow, setError, setShowdetailsPopup = (f)=>{}}) {
  const { userId } = data;
  const renderComp = () => {
    let comp = <></>;
    switch(regReqType) {
        case 'CLUB':
            comp = <ClubMemberDetails setData={setData} memberData={data} />
            break;
        case 'INST':
            comp = <InstituteMemberDetails setData={setData} memberData={data} />
            break;
        case 'INDI':
            comp = <IndividualDetails setData={setData} memberData={data} />
            break;
        case 'LIFE':
            comp = <LifeTimeIndividualDetails setData={setData} memberData={data} />
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
  }, [userId]);

  return (
    <>
      {
        renderComp()
      }
    </>
  );
}