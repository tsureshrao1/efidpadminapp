import { Row } from "react-bootstrap"
import ConfirmRiderProfile from './riderProfile';
import ConfirmRiderContactDetails from './riderContact';
import ConfirmRiderAddressDetails from './riderAddress';
import ConfirmRiderIdentityDetails from './riderIdentity';
import ConfirmRiderEquestrainQualification from './riderEquestrainQualification';
import ConfirmAttachments from "../../../confirmAttachments";
import MemberPayment from "../../../payment/memberPayments";

const RiderDetails = ({data}) => {
    const rider = {...data};
    return (
        <Row>
            <ConfirmRiderProfile rider={rider} />
            <ConfirmRiderContactDetails rider={rider} />
            <ConfirmRiderAddressDetails rider={rider} />
            <ConfirmRiderIdentityDetails rider={rider} />
            <ConfirmRiderEquestrainQualification rider={rider} />
            <ConfirmAttachments attachments={rider.fileAttachment} />
            <MemberPayment userId={rider.riderId} />
        </Row>
    )
}

export default RiderDetails