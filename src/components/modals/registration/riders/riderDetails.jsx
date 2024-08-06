import { Row } from "react-bootstrap"
import ConfirmRiderProfile from './riderProfile';
import ConfirmRiderContactDetails from './riderContact';
import ConfirmRiderAddressDetails from './riderAddress';
import ConfirmRiderIdentityDetails from './riderIdentity';
import ConfirmRiderEquestrainQualification from './riderEquestrainQualification';
import ConfirmAttachments from "../../../confirmAttachments";
import MemberPayment from "../../../payment/memberPayments";

const RiderDetails = ({data, setData}) => {
    const rider = {...data};
    return (
        <Row>
            <ConfirmRiderProfile rider={rider} />
            <ConfirmRiderContactDetails rider={rider} />
            <ConfirmRiderAddressDetails rider={rider} />
            <ConfirmRiderIdentityDetails rider={rider} setData={setData} />
            <ConfirmRiderEquestrainQualification rider={rider} />
            <ConfirmAttachments attachments={rider.fileAttachment} />
            <MemberPayment id={rider.riderId} isEntity={true} type='HORSE' />
        </Row>
    )
}

export default RiderDetails