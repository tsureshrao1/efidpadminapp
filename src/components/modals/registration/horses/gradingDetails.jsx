import { Col, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { DISCIPLINE_CONF, DISCIPLINE_LABELS } from './../../../../utils/constants';

const ConfirmGradingDetails = ({
    horse
}) => {
    return (
        <Accordion
            title="Horse Grading Details"
            id="horse-grading-details"
        >
            <Row>
                {
                    Object.keys(DISCIPLINE_LABELS)?.map(disName => {
                        return (
                            <Col key={disName} xs={12} sm={6} md={2}>
                                <label class="form-label text-gray-dark" >{disName}</label>
                                {
                                    horse.horseGradingList?.map(dis => {
                                        return dis.disciplineName?.toLowerCase() == disName.split(' Grade')[0].toLowerCase() ?  <p>{dis.grade}</p> : <></>;
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

export default ConfirmGradingDetails