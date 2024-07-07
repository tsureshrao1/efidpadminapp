import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"

const ConfirmOwnerDetails = ({ horse }) => {
    return (
        <Accordion
            title="Horse Owner Details"
            id="horse-owner-details"
        >
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Owner Name"
                        value={horse.nameOfOwner}
                    />
                </Col>

                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Mobile Number"
                        value={horse.mobileNumber}
                    />
                </Col>

                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Phone Number"
                        value={horse.phoneNumber}
                    />
                </Col>

                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Email Id"
                        value={horse.emailId}
                    />
                </Col>

                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Address"
                        value={horse.addressLine1}
                    />
                </Col>

                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="City"
                        value={horse.city}
                    />
                </Col>

                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="State"
                        value={horse.state}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Pin code"
                        value={horse.pinCode}
                    />
                </Col>
            </Row>
        </Accordion>
    )
}

export default ConfirmOwnerDetails