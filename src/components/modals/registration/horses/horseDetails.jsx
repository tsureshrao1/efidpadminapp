import { Row } from "react-bootstrap"
import ConfirmHorseProfile from "./profile";
import ConfirmOwnerDetails from "./ownerDetails";
import ConfirmIdentityDetails from "./identityDetails";
import ConfirmGradingDetails from "./gradingDetails";
import ConfirmAttachments from "../../../confirmAttachments";
import MemberPayment from "../../../payment/memberPayments";
const HorseDetails = ({data, setData}) => {
    const horse = {...data};
    return (
        <Row>
            <ConfirmHorseProfile horse={horse} />
            <ConfirmOwnerDetails horse={horse} />
            <ConfirmIdentityDetails horse={horse} setData={setData} />
            <ConfirmGradingDetails horse={horse} />
            <ConfirmAttachments attachments={horse.fileAttachment} />
            <MemberPayment id={horse.horseId} isEntity={true} type='HORSE' />
        </Row>
    )
}

export default HorseDetails