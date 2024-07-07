import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import { DISCIPLINE_LABELS } from "../../../../utils/constants"

const ConfirmRiderEquestrainQualification = ({ rider }) => {
    return (
        <Accordion
            title={"Rider Equestrain Qualification"}
            id="rider_equestrain_qualification"
        >
            <Row>
                {
                    Object.keys(DISCIPLINE_LABELS).map(disName => {
                        return (
                            <Col key={disName} xs={12} sm={6} md={2}>
                                <label class="form-label text-gray-dark" >{disName}</label>
                                {
                                    rider?.riderEquestrianQualificationList?.map(dis => {
                                        return dis.disciplineName.toLowerCase() == disName.split(' Grade')[0].toLowerCase() ?  <p>{dis.grade}</p> : <></>;
                                    })
                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </Accordion>
    )
}

export default ConfirmRiderEquestrainQualification