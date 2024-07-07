import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { format } from "date-fns"

const ConfirmRiderAddressDetails = ({ rider }) => {
    return (
        <Accordion
            title={"Rider Address Details"}
            id="rider_address_details"
        >
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Aadhaar CardNumber"
                        value={rider.aadhaarCardNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Address Line1"
                        value={rider.presentAddressLine1}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Address Line2"
                        value={rider.presentAddressLine2}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Address Line3"
                        value={rider.presentAddressLine3}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="City"
                        value={rider.presentCity}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="State"
                        value={rider.presentState}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Pincode"
                        value={rider.presentPinCode}
                    />
                </Col>
            </Row>
        </Accordion>
    )
}

export default ConfirmRiderAddressDetails