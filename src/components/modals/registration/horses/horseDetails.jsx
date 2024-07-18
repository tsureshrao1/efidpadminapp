import { Row } from "react-bootstrap"
import ConfirmHorseProfile from "./profile";
import ConfirmOwnerDetails from "./ownerDetails";
import ConfirmIdentityDetails from "./identityDetails";
import ConfirmGradingDetails from "./gradingDetails";
import ConfirmAttachments from "../../../confirmAttachments";
import MemberPayment from "../../../payment/memberPayments";
const HorseDetails = ({data}) => {
    const horse = {...data};
    return (
        <Row>
            <ConfirmHorseProfile horse={horse} />
            <ConfirmOwnerDetails horse={horse} />
            <ConfirmIdentityDetails horse={horse} />
            <ConfirmGradingDetails horse={horse} />
            <ConfirmAttachments attachments={horse.fileAttachment} />
            <MemberPayment userId={horse.horseId} />
        </Row>
    )
}

export default HorseDetails