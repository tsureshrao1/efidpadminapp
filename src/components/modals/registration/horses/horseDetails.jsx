import { Row } from "react-bootstrap"
import ConfirmHorseProfile from "./profile";
import ConfirmOwnerDetails from "./ownerDetails";
import ConfirmIdentityDetails from "./identityDetails";
import ConfirmGradingDetails from "./gradingDetails";
const HorseDetails = ({data}) => {
    const horse = {...data};
    return (
        <Row>
            <ConfirmHorseProfile horse={horse} />
            <ConfirmOwnerDetails horse={horse} />
            <ConfirmIdentityDetails horse={horse} />
            <ConfirmGradingDetails horse={horse} />
        </Row>
    )
}

export default HorseDetails