import { Col, Form, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { displayDate } from "../../../../services/dateutils"
import { getHorseRegNum } from "../../../../services/apiService"
import { useParams } from "react-router-dom"
import { NAV_SUB_ROUTES } from "../../../../utils/constants"

const ConfirmIdentityDetails = ({ horse, setData }) => {
    const generateRegNumber = async () => {
        const responseNum = await getHorseRegNum();
        setData({
            ...horse,
            efiRegistrationNumber: responseNum
        })
    }
    const { reqType } = useParams();
    const isRequests = reqType === NAV_SUB_ROUTES.VIEW ? false : true;
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
                {
                    isRequests ? (
                        <>
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
                                <a style={{cursor: 'pointer'}} href="javascript:void(0)" onClick={generateRegNumber}>Generate New</a>
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
                            </Form.Group>
                        </>
                    ) : (
                        <>
                            <Col xs={12} sm={6} md={4}>
                                <DataLabelValue
                                    label="EFI Registration Number"
                                    value={horse.efiRegistrationNumber}
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <DataLabelValue
                                    label="FEI Registration Number"
                                    value={horse.feiRegistrationNumber}
                                />
                            </Col>
                        </>
                    )
                }
                
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="UELN Number"
                        value={horse.uelnNumber}
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