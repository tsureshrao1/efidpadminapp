import { useState, useEffect } from 'react';
import { getClubByUser } from '../../../services/apiService';
import ClubMemberDetails from './clubmemberdetailspopup';
import InstituteMemberDetails from './institutememberdetailspopup';
import IndividualDetails from './individualmemberdetailspopup';
import LifeTimeIndividualDetails from './lifetimeIndividualDetailspopup';
import { toast } from 'react-toastify';
export default function MemberDetails({data, regReqType, setShow, setError, setShowdetailsPopup = (f)=>{}}) {
  const { userId } = data;
  const [memberData, setMemberData] = useState({});
  const renderComp = () => {
    let comp = <></>;
    switch(regReqType) {
        case 'CLUB':
            comp = <ClubMemberDetails userData={memberData} />
            break;
        case 'INST':
            comp = <InstituteMemberDetails userData={memberData} />
            break;
        case 'INDI':
            comp = <IndividualDetails userData={memberData} />
            break;
        case 'LIFE':
            comp = <LifeTimeIndividualDetails userData={memberData} />
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
            setMemberData(response.data);
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