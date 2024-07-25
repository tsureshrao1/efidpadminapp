import { Col, Form, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { displayDate } from "../../../../services/dateutils"

const ConfirmIdentityDetails = ({ horse, setData }) => {
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
                <Form.Group as={Col} md="4" controlId={`validationCustom017`}>
                    <Form.Label>EFI Registration Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="EFI Number"
                        value={horse.efiRegistrationNumber}
                        onChange={(e) => {
                            setData({
                                ...horse,
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
                        value={horse.feiRegistrationNumber}
                        onChange={(e) => {
                            setData({
                                ...horse,
                                feiRegistrationNumber: e.target.value
                            })
                        }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Rider FEI required.
                    </Form.Control.Feedback>
                </Form.Group>
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