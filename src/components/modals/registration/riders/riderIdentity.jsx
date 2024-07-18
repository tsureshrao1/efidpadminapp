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
                        label="Place of Birth"
                        value={rider.placeOfBirth}
                    />

                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Nationality"
                        value={rider.nationality}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Aadhaar Card Number"
                        value={rider.aadhaarCardNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Are you Foreigner?"
                        value={rider.areYouForeigner ? 'Yes' : 'No'}
                    />
                </Col>
            </Row>
        </Accordion>
    )
}

export default ConfirmRiderIdentityDetails