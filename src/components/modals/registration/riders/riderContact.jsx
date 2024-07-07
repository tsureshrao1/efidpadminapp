import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"

const ConfirmRiderContactDetails = ({ rider }) => {
    return (
        <Accordion
            title={"Rider Contact Details"}
            id="rider_contact_details"
        >
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Phone Number"
                        value={rider.phoneNumber}
                    />

                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Mobile Number"
                        value={rider.mobileNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Email Id"
                        value={rider.emailId}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Club Name"
                        value={rider.clubName}
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

export default ConfirmRiderContactDetails