import { Col, Row } from "react-bootstrap";
import Accordion from "../../../accordion";
import { dressingGrades, enduranceGrades, eventingGrades, jumpingGrades, tentPeggingGrades, DISCIPLINE_LABELS, USER_STATUS, USER_ROLES } from './../../../../utils/constants';
import { useAppContext } from "../../../../context";
import GradeSelect from "./GradeSelect";

const ConfirmGradingDetails = ({
    horse,
    handleChange,
    tempGradeDetails
}) => {
    const {state} = useAppContext();
    const { userData } = state;
    return (
        <Accordion
            title="Horse Grading Details"
            id="horse-grading-details"
        >
            {
                userData.userRole === USER_ROLES.ADMIN && horse?.horseStatus?.includes(USER_STATUS.ACTIVE) ? (
                    <>
                        <Row className="input-group" style={{ marginBottom: '20px' }}>
                            <Col xs={12} sm={6} md={4}>

                                <GradeSelect
                                    label="Dressage"
                                    prefix="Dressage - "
                                    name={"Dressage"}
                                    value={tempGradeDetails['Dressage'] || []}
                                    handleChange={handleChange}
                                    grades={dressingGrades}
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <GradeSelect
                                    label="Show Jumping"
                                    name={"Jumping"}
                                    prefix="Jumping - "
                                    value={tempGradeDetails['Jumping'] || []}
                                    handleChange={handleChange}
                                    grades={jumpingGrades}
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <GradeSelect
                                    label="Eventing"
                                    prefix="Eventing - "
                                    // id={id}
                                    name={"Eventing"}
                                    value={tempGradeDetails['Eventing'] || []}
                                    handleChange={handleChange}
                                    grades={eventingGrades}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} md={4}>
                                <GradeSelect
                                    label="Tent Pegging"
                                    name={"Tent Pegging"}
                                    prefix="Tent Pegging - "
                                    value={tempGradeDetails['Tent Pegging'] || []}
                                    handleChange={handleChange}
                                    grades={tentPeggingGrades}
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <GradeSelect
                                    label="Endurance"
                                    name={"Endurance"}
                                    prefix="Endurance - "
                                    value={tempGradeDetails['Endurance'] || []}
                                    handleChange={handleChange}
                                    grades={enduranceGrades}
                                />
                            </Col>
                        </Row>
                    </>
                ) : (
                    <Row>
                        {
                            Object.keys(DISCIPLINE_LABELS)?.map(disName => {
                                return (
                                    <Col key={disName} xs={12} sm={6} md={2}>
                                        <label className="form-label text-gray-dark" >{disName}</label>
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
                )
            }
        </Accordion>
    )
}

export default ConfirmGradingDetails