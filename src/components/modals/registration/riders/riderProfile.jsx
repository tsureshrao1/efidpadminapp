import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { displayDate } from "../../../../services/dateutils"

const ConfirmRiderProfile = ({ rider }) => {
    return (
        <Accordion
            title={"Rider Profile"}
            id="rider_profile"
        >
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Rider First Name"
                        value={rider.riderFirstName}
                    />

                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Rider Last Name"
                        value={rider.riderLastName}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Gender"
                        value={rider.gender}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Date of Birth"
                        value={displayDate(rider.dateOfBirth)}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Parent Name"
                        value={rider.fatherName}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Educational Qualification"
                        value={rider.educationalQualification}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Marital Status"
                        value={rider.martialStatus}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Spouse Name"
                        value={rider.spouseName}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Occupation"
                        value={rider.occupation}
                    />
                </Col>
            </Row>
        </Accordion>
    )
}

export default ConfirmRiderProfile