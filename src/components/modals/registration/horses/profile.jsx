import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { displayDate } from "../../../../services/dateutils"

const ConfirmHorseProfile = ({ horse }) => {
    return (
        <Accordion
            title={"Horse Profile"}
            id="horse_profile"
        >
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Horse Name"
                        value={horse.horseName}
                    />

                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Horse Breed"
                        value={horse.breed}
                    />

                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Horse colour"
                        value={horse.colour}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Gender"
                        value={horse.gender}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Date of Birth"
                        value={displayDate(horse.dateOfBirth)}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Height in cms"
                        value={horse.height}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Country of Birth"
                        value={horse.countryOfBirth}
                    />
                </Col>
            </Row>
        </Accordion>
    )
}

export default ConfirmHorseProfile