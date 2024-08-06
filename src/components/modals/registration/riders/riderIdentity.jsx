import { Col, Form, Row } from "react-bootstrap"
import Accordion from "../../../accordion"
import DataLabelValue from "../../../DataLabelValue"
import { getRiderRegNum } from "../../../../services/apiService"
import { useParams } from "react-router-dom"
import { NAV_SUB_ROUTES } from "../../../../utils/constants"

const ConfirmRiderIdentityDetails = ({ rider, setData }) => {
    const generateRegNumber = async () => {
        const responseNum = await getRiderRegNum();
        setData({
            ...rider,
            efiRegistrationNumber: responseNum
        })
    }
    
    const { reqType } = useParams();
    const isRequests = reqType === NAV_SUB_ROUTES.VIEW ? false : true;
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
                        label="Aadhaar / Passport Number"
                        value={rider.aadhaarCardNumber}
                    />
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <DataLabelValue
                        label="Are you Foreigner?"
                        value={rider.areYouForeigner ? 'Yes' : 'No'}
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
                                    value={rider.efiRegistrationNumber}
                                    onChange={(e) => {
                                        setData({
                                            ...rider,
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
                        </>
                    ) : (
                        <>
                            <Col xs={12} sm={6} md={4}>
                                <DataLabelValue
                                    label="EFI Registration Number"
                                    value={rider.efiRegistrationNumber}
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <DataLabelValue
                                    label="FEI Registration Number"
                                    value={rider.feiRegistrationNumber}
                                />
                            </Col>
                        </>
                    )
                }
            </Row>
        </Accordion>
    )
}

export default ConfirmRiderIdentityDetails