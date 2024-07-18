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
            <h5>Present Address</h5>
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
            <Row>
                <h5>Permanent Address</h5>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Address Line1"
                        value={rider.permanentAddressLine1}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Address Line2"
                        value={rider.permanentAddressLine2}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Address Line3"
                        value={rider.permanentAddressLine3}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="City"
                        value={rider.permanentCity}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="State"
                        value={rider.permanentState}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Pincode"
                        value={rider.permanentPinCode}
                    />
                </Col>
            </Row>
        </Accordion>
    )
}

export default ConfirmRiderAddressDetails