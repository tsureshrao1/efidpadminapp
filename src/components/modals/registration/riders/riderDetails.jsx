import { Row } from "react-bootstrap"
import ConfirmRiderProfile from './riderProfile';
import ConfirmRiderContactDetails from './riderContact';
import ConfirmRiderAddressDetails from './riderAddress';
import ConfirmRiderIdentityDetails from './riderIdentity';
import ConfirmRiderEquestrainQualification from './riderEquestrainQualification';

const RiderDetails = ({data}) => {
    const rider = {...data};
    return (
        <Row>
            <ConfirmRiderProfile rider={rider} />
            <ConfirmRiderContactDetails rider={rider} />
            <ConfirmRiderAddressDetails rider={rider} />
            <ConfirmRiderIdentityDetails rider={rider} />
            <ConfirmRiderEquestrainQualification rider={rider} />
        </Row>
    )
}

export default RiderDetails