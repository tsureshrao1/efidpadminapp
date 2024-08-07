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
import { EVENT_STATUS, USER_ROLES } from '../../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import EventDetails from './eventDetails';
import { Link } from 'react-router-dom';
import { formatDate } from '../../services/dateutils';
import EventInfoTab from './eventTabContent/eventInfo';
import EventsResults from './eventResults';
import { useAppContext } from '../../context';
const eventStageObj = {
    DRAFT: 'Update',
    REGISTER: 'Review',
    REVIEWED: 'Approve',
    PUBLISHED: 'Published',
    PUBLISHED_REGISTER: 'Review',
    PUBLISHED_REVIEWED: 'Approve'
}

export default function EventHandler() {
    const location = useLocation();
    const navigate = useNavigate();
    const {state} = useAppContext();
    const {userData} = state;
    const { pathname } = location;
    const urlParts = pathname.split('/');
    const [eventId, setEventId] = useState(urlParts[urlParts.length - 1]);
    const [eventObj, setEventObj] = useState({});
    const [eventStage, setEventStage] = useState();
    const [activeIndex, setActiveIndex] = useState('home');
    const [validated, setValidated] = useState(false);
    const [approvalComments, setApprovalComments] = useState('');
    const [selectedCategory, setSelectedCategory] = useState();
    const eventModify = async(rejected=false) => {
        let eventStatus =  eventObj.eventStatus;
        let comment = eventObj.approvalComments;
        let status =  '';
        if(!rejected) {
            status = userData.userRole === USER_ROLES.ADMIN
            ? eventStatus.replace(EVENT_STATUS.REGISTER, EVENT_STATUS.REVIEW)
            : EVENT_STATUS.PUBLISH;
            // if(eventObj.eventStatus === EVENT_STATUS.REGISTER) {
            //     eventStatus = EVENT_STATUS.REVIEW;
            // } else if(eventObj.eventStatus === EVENT_STATUS.REVIEW) {
            //     eventStatus = EVENT_STATUS.PUBLISH;
            // }
        } else {
            if(!approvalComments) {
                toast.error('Comment is mandatory for rejecting the event');
                return;
            }
            status = userData.userRole === USER_ROLES.ADMIN
            ? eventStatus.replace(EVENT_STATUS.REGISTER, EVENT_STATUS.REJECT)
            : eventStatus.replace(EVENT_STATUS.REVIEW, EVENT_STATUS.REJECT);
        }
        comment = eventObj.approvalComments ?
            `${new Date().toLocaleString()}: ${userData.userName}: ${approvalComments}@_&_@${eventObj.approvalComments}` :
            `${new Date().toLocaleString()}: ${userData.userName}: ${approvalComments}`;
        const formDetails = {
            ...eventObj,
            eventStatus: status,
            approvalComments: comment
        }
        try {
            await updateEventAPI(formDetails);
            toast.success(`Event ${eventStatus.toLowerCase()} successfully!`);
            navigate(location?.state?.from);
        } catch (e) {
            toast.error(e);
        }
    }

    const toggleEntries = (catId) => {
        setSelectedCategory(catId);
        setActiveIndex('participants');
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
                        <Link to={location?.state?.from}  style={{
                        marginRight: '10px'
                    }}><i class="fa fa-arrow-left"></i></Link> {eventStage} Event
                    </h2>
                    <Form style={{
                        marginBottom: '20px',
                    }} onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <Tabs activeKey={activeIndex} onSelect={(activeKey) => setActiveIndex(activeKey)}>
                                        <Tab eventKey="home" title="Event Details">
                                            <div class="card-body">
                                                <EventInfoTab eventObj={eventObj} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="disciplines" title="Disciplines">
                                            <div class="card-body">
                                                {
                                                    eventObj.efiEventsDisciplinesList.map((discipline, index) => {
                                                        return (
                                                            <Row key={index} style={{
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
                                                                        {formatDate(discipline.eventDisciplineStartDate)}
                                                                    </div>
                                                                </Form.Group>
                                                                <Form.Group as={Col} md="4" controlId={`validationCustom017${index}`}>
                                                                    <Form.Label>Discipline end date</Form.Label>
                                                                    <div>
                                                                        {formatDate(discipline.eventDisciplineEndDate)}
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
                                                                        <div key={categoryIndex} style={{
                                                                            marginBottom: '10px',
                                                                            backgroundColor: 'rgb(255 245 241)',
                                                                            paddingTop: '10px',
                                                                            borderRadius: '5px 5px 0px 0px',
                                                                            boxShadow: '1px 2px 3px rgba(0, 0, 0, 0.3)'
                                                                        }}>
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
                                                                                        {
                                                                                            eventObj.eventStatus === EVENT_STATUS.PUBLISH && (
                                                                                                <Form.Group as={Col} md="2" controlId={`validationCustom019${index}${categoryIndex}`}>
                                                                                                    <Form.Label>Action</Form.Label>
                                                                                                    <div>
                                                                                                        <a onClick={() => {toggleEntries(category.efiEventsDisciplinesCategoryId);}} href="javascript:void(0);" className="f-14 me-2">
                                                                                                            <i className="fa fa-eye"></i> Participants
                                                                                                        </a>
                                                                                                    </div>
                                                                                                </Form.Group>
                                                                                            )
                                                                                        }
                                                                                    </Row>
                                                                                </div>
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
                                                { eventObj?.approvalComments && 
                                                    <Col md="12" style={{
                                                        marginBottom: '20px'
                                                    }}>
                                                        <label className="form-label">Comments</label>
                                                        {eventObj?.approvalComments?.split('@_&_@')?.map((comment, index) => (
                                                            <p key={index}>{comment}</p>
                                                        ))}
                                                    </Col>
                                                }
                                                { eventObj.eventStatus !== EVENT_STATUS.PUBLISH && 
                                                    <Form.Group as={Col} md="12" controlId={`validationCustom0178`}>
                                                        <Form.Label>Comment</Form.Label>
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
                                                    
                                                    <Button variant="danger" style={{
                                                        display: 'block',
                                                        float: 'right',
                                                        marginRight: '20px'
                                                    }} onClick={() => {eventModify(true)}}>Reject Event</Button>
                                                </div>
                                            </Row>
                                            }
                                        </Tab>
                                        { eventObj.eventStatus === EVENT_STATUS.PUBLISH && 
                                            <Tab eventKey="participants" title="Participants">
                                                <div class="card-body">
                                                    <div style={{
                                                        maxWidth: '250px'
                                                    }}>
                                                        <Form.Label>Select Entry</Form.Label>
                                                        <Form.Control
                                                            required
                                                            className="form-select"
                                                            as="select"
                                                            type="select"
                                                            value={selectedCategory}
                                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                                        >
                                                            <option value="">Select Entry</option>
                                                            {
                                                                eventObj.efiEventsDisciplinesList.map((discipline, index) => {
                                                                    return discipline.efiEventsDisciplinesCategoryList.map((cat, catIndex) => {
                                                                        return <option key={catIndex} value={cat.efiEventsDisciplinesCategoryId}>{`${discipline.eventDisciplineName} - ${cat.eventCategoryName}`}</option>
                                                                    })
                                                                })

                                                            }
                                                        </Form.Control>
                                                    </div>
                                                    {
                                                        selectedCategory > 0 && (
                                                            <EventsRequests catId={selectedCategory} />
                                                        )
                                                    }
                                                </div>
                                            </Tab>
                                        }
                                        { eventObj.eventStatus === EVENT_STATUS.PUBLISH && 
                                            <Tab eventKey="results" title="Results">
                                                <div class="card-body">
                                                    <div style={{
                                                        maxWidth: '250px'
                                                    }}>
                                                        <Form.Label>Select Entry</Form.Label>
                                                        <Form.Control
                                                            required
                                                            className="form-select"
                                                            as="select"
                                                            type="select"
                                                            value={selectedCategory}
                                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                                        >
                                                            <option value="">Select Entry</option>
                                                            {
                                                                eventObj.efiEventsDisciplinesList.map((discipline, index) => {
                                                                    return discipline.efiEventsDisciplinesCategoryList.map((cat, catIndex) => {
                                                                        return <option key={catIndex} value={cat.efiEventsDisciplinesCategoryId}>{`${discipline.eventDisciplineName} - ${cat.eventCategoryName}`}</option>
                                                                    })
                                                                })

                                                            }
                                                        </Form.Control>
                                                    </div>
                                                    {
                                                        selectedCategory > 0 && (
                                                            <EventsResults catId={selectedCategory} />
                                                        )
                                                    }
                                                </div>
                                            </Tab>
                                        }
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