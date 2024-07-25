import { Col, Form, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"

const ConfirmRiderIdentityDetails = ({ rider, setData }) => {
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
                <Form.Group as={Col} md="4" controlId={`validationCustom017`}>
                    <Form.Label>EFI Registration Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="EFI Number"
                        value={rider.efiRegistrationNumber}
                        onChange={(e) => {
                            setData({
                                ...rider,
                                efiRegistrationNumber: e.target.value
                            })
                        }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Rider EFI required.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId={`validationCustom017`}>
                    <Form.Label>FEI Registration Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="FEI number"
                        value={rider.feiRegistrationNumber}
                        onChange={(e) => {
                            setData({
                                ...rider,
                                feiRegistrationNumber: e.target.value
                            })
                        }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Rider FEI required.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
        </Accordion>
    )
}

export default ConfirmRiderIdentityDetails