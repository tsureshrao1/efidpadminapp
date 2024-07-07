import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { displayDate } from "../../../../services/dateutils"

const ConfirmRiderIdentityDetails = ({ rider }) => {
    return (
        <Accordion
            title={"Rider identity Details"}
            id="rider_identity_details"
        >
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Remount Number"
                        value={rider.remountNumber}
                    />

                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Date of Import"
                        value={displayDate(rider.dateOfImport, "dd-MM-yyyy")}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Microchip Number"
                        value={rider.microChipNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="EFI Registration"
                        value={rider.efiRegistrationNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="FEI Registration"
                        value={rider.feiRegistrationNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Club/Institute Membership Id"
                        value={rider.clubMembershipId}
                    />
                </Col>
            </Row>
        </Accordion>
    )
}

export default ConfirmRiderIdentityDetails