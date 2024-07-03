import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { updateEventAPI, getEventByID } from '../../services/eventsService';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/Row';
import EventsRequests from './eventsRequests';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { EVENT_STATUS } from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import EventDetails from './eventDetails';
import { Link } from 'react-router-dom';
const eventStageObj = {
    DRAFT: 'Update',
    REGISTER: 'Review',
    REVIEWED: 'Publish',
    PUBLISHED: 'Published'
}

export default function EventHandler() {
    const location = useLocation();
    const { state, pathname } = location;
    const urlParts = pathname.split('/');
    const [eventId, setEventId] = useState(urlParts[urlParts.length - 1]);
    const [eventObj, setEventObj] = useState({});
    const [eventStage, setEventStage] = useState();
    const [activeIndex, setActiveIndex] = useState('home');
    const [validated, setValidated] = useState(false);
    const [approvalComments, setApprovalComments] = useState('');
    const [selectedCategory, setSelectedCategory] = useState();
    const eventModify = async() => {
        let eventStatus =  eventObj.eventStatus;
        let comment = eventObj.approvalComments;
        if(eventObj.eventStatus === EVENT_STATUS.REGISTER) {
            eventStatus = EVENT_STATUS.REVIEW;
            comment = approvalComments;
        } else if(eventObj.eventStatus === EVENT_STATUS.REVIEW) {
            eventStatus = EVENT_STATUS.PUBLISH;
            comment = `${eventObj.approvalComments}@_&_@${approvalComments}`;
        }
        const formDetails = {
            ...eventObj,
            eventStatus,
            approvalComments: comment
        }
        try {
            await updateEventAPI(formDetails);
            toast.success(`Event ${eventStatus.toLowerCase()} successfully!`);
        } catch (e) {
            toast.error(e);
        }
    }

    const toggleEntries = (catId) => {
        if(catId == selectedCategory) {
            setSelectedCategory(0);
            return;
        }
        setSelectedCategory(catId);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            eventModify();
        } else {
            toast.info('Fill all the required fields!');
        }
        setValidated(true);
    };

    const getEventDetails = async () => {
        const response = await getEventByID(eventId);
        setEventObj(response);
        setEventStage(eventStageObj[response.eventStatus]);
    }

    useEffect(()=>{
        if(eventId) {
            getEventDetails(eventId);
        }
    },  [eventId])
    return (
        <>
        {
            Object.keys(eventObj).length > 0 ? 
            (!eventStage || eventStage === 'Update') ? (
                <EventDetails eventObj={eventObj} />
            ) : (
                <>
                    <h2>
                        <Link to={state.from}  style={{
                        marginRight: '10px'
                    }}><i class="fa fa-arrow-left"></i></Link> {eventStage} Event
                    </h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
                        marginBottom: '20px',
                    }}>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <Tabs activeKey={activeIndex} onSelect={(activeKey) => setActiveIndex(activeKey)}>
                                        <Tab eventKey="home" title="Event Details">
                                            <div class="card-body">
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>Event name</Form.Label>
                                                        <div>
                                                            {eventObj.eventName}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                        <Form.Label>Event status</Form.Label>
                                                        <div>
                                                            {eventObj.eventStatus}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                        <Form.Label>Event entry fee</Form.Label>
                                                        <div>
                                                            {eventObj.eventEntryFee}
                                                        </div>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                                                        <Form.Label>Organizer name</Form.Label>
                                                        <div>
                                                            {eventObj.organizerName}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                                                        <Form.Label>Phone number</Form.Label>
                                                        <div>
                                                            {eventObj.contactPhoneNumber}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom06">
                                                        <Form.Label>Email</Form.Label>
                                                        <div>
                                                            {eventObj.contactEmailId}
                                                        </div>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom07">
                                                        <Form.Label>Event venue address</Form.Label>
                                                        <div>
                                                            {eventObj.eventVenueAddress}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom08">
                                                        <Form.Label>Event city</Form.Label>
                                                        <div>
                                                            {eventObj.eventCity}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom09">
                                                        <Form.Label>Event state</Form.Label>
                                                        <div>
                                                            {eventObj.eventState}
                                                        </div>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="4" controlId="validationCustom010">
                                                        <Form.Label>Pincode</Form.Label>
                                                        <div>
                                                            {eventObj.eventPinCode}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom011">
                                                        <Form.Label>Event start date</Form.Label>
                                                        <div>
                                                            {eventObj.eventStartDate}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4" controlId="validationCustom012">
                                                        <Form.Label>Event end date</Form.Label>
                                                        <div>
                                                            {eventObj.eventEndDate}
                                                        </div>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} md="12" controlId="validationCustom013">
                                                        <Form.Label>About</Form.Label>
                                                        <div>
                                                            {eventObj.about}
                                                        </div>
                                                    </Form.Group>
                                                </Row>
                                                <Row>
                                                    <div>
                                                        <Button
                                                        onClick={
                                                            () => {
                                                                setActiveIndex('disciplines')
                                                            }
                                                        }
                                                        style={{
                                                            width: '100px',
                                                            display: 'block',
                                                            float: 'right',
                                                        }} type="button">Next</Button>
                                                    </div>
                                                </Row>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="disciplines" title="Disciplines">
                                            <div class="card-body">
                                                {
                                                    eventObj.efiEventsDisciplinesList.map((discipline, index) => {
                                                        return (
                                                            <Row style={{
                                                                    border: '1px solid silver',
                                                                    padding: '20px 0px',
                                                                    marginBottom: '20px'
                                                                }} 
                                                                className="mb-3"
                                                            >
                                                                <Form.Group as={Col} md="4" controlId={`validationCustom015${index}`}>
                                                                    <Form.Label>Discipline name</Form.Label>
                                                                        <div>
                                                                            {discipline.eventDisciplineName}
                                                                        </div>
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} md="4" controlId={`validationCustom016${index}`}>
                                                                        <Form.Label>Discipline start date</Form.Label>
                                                                        <div>
                                                                            {discipline.eventDisciplineStartDate}
                                                                        </div>
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} md="4" controlId={`validationCustom017${index}`}>
                                                                        <Form.Label>Discipline end date</Form.Label>
                                                                        <div>
                                                                            {discipline.eventDisciplineEndDate}
                                                                        </div>
                                                                    </Form.Group>
                                                                    <div style={{
                                                                        margin: '10px 0px',
                                                                        fontWeight: 'bold',
                                                                        fontSize: '20px'
                                                                    }}>
                                                                        Categories
                                                                    </div>
                                                                    {
                                                                        discipline.efiEventsDisciplinesCategoryList.map((category, categoryIndex) => (
                                                                            <div style={
                                                                                (eventObj.eventStatus === EVENT_STATUS.PUBLISH && category.efiEventsDisciplinesCategoryId && category.efiEventsDisciplinesCategoryId === selectedCategory) ? {
                                                                                    background: 'whitesmoke',
                                                                                    marginBottom: '10px',
                                                                                    padding: '10px 30px'
                                                                                } : {marginBottom: '10px'}
                                                                            }>
                                                                                    <div style={{
                                                                                            marginBottom: '20px',
                                                                                        }}>
                                                                                        <Row>
                                                                                            <Form.Group as={Col} md="3" controlId={`validationCustom017${index}${categoryIndex}`}>
                                                                                                <Form.Label>Category name</Form.Label>
                                                                                                <div>
                                                                                                    {category.eventCategoryName}
                                                                                                </div>
                                                                                            </Form.Group>
                                                                                            <Form.Group as={Col} md="3" controlId={`validationCustom0119${index}${categoryIndex}`}>
                                                                                                <Form.Label>Round names</Form.Label>
                                                                                                <div>
                                                                                                    {category.roundsName}
                                                                                                </div>
                                                                                            </Form.Group>
                                                                                            <Form.Group as={Col} md="4" controlId={`validationCustom019${index}${categoryIndex}`}>
                                                                                                <Form.Label>Horse qualification</Form.Label>
                                                                                                    <div>
                                                                                                        {category.horseQualification}
                                                                                                    </div>
                                                                                            </Form.Group>
                                                                                            <Form.Group as={Col} md="2" controlId={`validationCustom019${index}${categoryIndex}`}>
                                                                                                <Form.Label>Action</Form.Label>
                                                                                                    <div>
                                                                                                        <a onClick={() => {
                                                                                                                    toggleEntries(category.efiEventsDisciplinesCategoryId);
                                                                                                                }} href="javascript:void(0);" className="f-14 me-2"><i className="fa fa-eye"></i> View</a>
                                                                                                    </div>
                                                                                            </Form.Group>
                                                                                        </Row>
                                                                                    </div>
                                                                                    {
                                                                                        eventObj.eventStatus === EVENT_STATUS.PUBLISH && selectedCategory > 0 && category.efiEventsDisciplinesCategoryId === selectedCategory && (
                                                                                            <EventsRequests catId={category.efiEventsDisciplinesCategoryId} />
                                                                                        )
                                                                                    }
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </Row>
                                                            );
                                                        })
                                                    }
                                            </div>
                                            <Row style={{
                                                marginBottom: '20px'
                                            }}>
                                                { (eventObj.eventStatus === EVENT_STATUS.REVIEW || eventObj.eventStatus === EVENT_STATUS.PUBLISH) && 
                                                    <Col md="12" style={{
                                                        marginBottom: '20px'
                                                    }}>
                                                        Admin comment:
                                                        <div>
                                                            {eventObj.approvalComments.split('@_&_@')[0]}
                                                        </div>
                                                    </Col>
                                                }
                                                { eventObj.eventStatus === EVENT_STATUS.PUBLISH && 
                                                    <Col md="12">
                                                       General Admin comment: 
                                                       <div>
                                                            {eventObj.approvalComments.split('@_&_@')[1]}
                                                       </div>
                                                    </Col>
                                                }
                                                { eventObj.eventStatus !== EVENT_STATUS.PUBLISH && 
                                                    <Form.Group as={Col} md="12" controlId={`validationCustom0178`}>
                                                        <Form.Label>Comments</Form.Label>
                                                        <Form.Control
                                                            required
                                                            as="textarea"
                                                            type="textarea"
                                                            placeholder="Enter approval/rejected comments"
                                                            value={approvalComments}
                                                            onChange={(e) => setApprovalComments(e.target.value)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">
                                                            Comments required.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                }
                                            </Row>
                                            { 
                                                eventObj.eventStatus !== EVENT_STATUS.PUBLISH && <Row>
                                                <div>
                                                    <Button style={{
                                                        display: 'block',
                                                        float: 'right',
                                                    }} type="submit">{eventStage} Event</Button>
                                                </div>
                                            </Row>
                                            }
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </Form>
                </>
            ) : <>Loading...</>
        }
        </>
    )
}