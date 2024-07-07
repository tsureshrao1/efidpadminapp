import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { displayDate } from "../../../../services/dateutils"

const ConfirmIdentityDetails = ({ horse }) => {
    return (
        <Accordion
            title="Horse Identity Details"
            id="horseIdentityDetails"
        >
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Remount Number"
                        value={horse.remountNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Date of Import"
                        value={displayDate(horse.dateOfImport)}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Microchip Number"
                        value={horse.microChipNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="EFI Registration Number"
                        value={horse.efiRegistrationNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Passport Number"
                        value={horse.passportNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Club Membership ID"
                        value={horse.clubMembershipId}
                    />
                </Col>
            </Row>
        </Accordion>
    )
}

export default ConfirmIdentityDetails