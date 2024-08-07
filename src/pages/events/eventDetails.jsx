import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { updateEventAPI, createEventAPI } from '../../services/eventsService';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/Row';
import { formatFormDate, getTimestamp } from '../../services/dateutils';
import { DISCIPLINE_CONF, NAV_ROUTES } from '../../utils/constants';
import EventsRequests from './eventsRequests';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { EVENT_STATUS } from '../../utils/constants';
import { Link } from 'react-router-dom';
export default function EventDetails({eventObj = {}}) {
    const eventStage = Object.keys(eventObj).length > 0 ? 'Update' : 'Create';
    const [activeIndex, setActiveIndex] = useState('home')
    const [validated, setValidated] = useState(false);
    const [eventName, setEventName] = useState(eventObj.eventName);
    const [eventStatus, setEventStatus] = useState(eventObj.eventStatus);
    const [eventEntryFee, setEventEntryFee] = useState(eventObj.eventEntryFee);
    const [organizerName, setOrganizerName] = useState(eventObj.organizerName);
    const [contactPhoneNumber, setContactPhoneNumber] = useState(eventObj.contactPhoneNumber);
    const [contactEmailId, setContactEmailId] = useState(eventObj.contactEmailId);
    const [eventVenueAddress, setEventVenueAddress] = useState(eventObj.eventVenueAddress);
    const [eventCity, setEventCity] = useState(eventObj.eventCity);
    const [eventState, setEventState] = useState(eventObj.eventState);
    const [eventPinCode, setEventPinCode] = useState(eventObj.eventPinCode);
    const [eventStartDate, setEventStartDate] = useState(formatFormDate(eventObj.eventStartDate));
    const [eventEndDate, setEventEndDate] = useState(formatFormDate(eventObj.eventEndDate));
    const [about, setAbout] = useState(eventObj.about);
    const [selectedCategory, setSelectedCategory] = useState();
    const [disciplines, setDisciplines] = useState(eventObj?.efiEventsDisciplinesList?.map(discipline => {
        return {
            ...discipline,
            eventDisciplineStartDate: formatFormDate(discipline.eventDisciplineStartDate),
            eventDisciplineEndDate: formatFormDate(discipline.eventDisciplineEndDate)
        }
    }) || []);

    const addDiscipline = () => {
        const timeNow = getTimestamp();
        let disciplineObj = {
            eventDisciplineName: "",
            eventDisciplineStartDate: "",
            eventDisciplineEndDate: "",
            efiEventsDisciplinesCategoryList: [],
            createdBy: "",
            createdDate: timeNow,
            modifiedBy: "",
            modifiedDate: timeNow
        }

        if(eventStage === 'Update') {
            disciplineObj = {
                ...disciplineObj,
                efiEventId: eventObj.efiEventId,
                efiEventsDisciplinesId: 0
            }
        }

        setDisciplines([
            ...disciplines,
            {
                ...disciplineObj
            }
        ]);
    }
    const addCategory = (disciplineIndex) => {
        const timeNow = getTimestamp();
        let categoryObj = {
            eventCategoryName: "",
            createdBy: "",
            horseQualification: '',
            createdDate: timeNow,
            modifiedBy: "",
            modifiedDate: timeNow
        }
        if(eventStage === 'Update') {
            categoryObj = {
                ...categoryObj,
                efiEventsDisciplinesCategoryId: 0
            }
        }
        const disciplinesCopy = [...disciplines];
        disciplinesCopy[disciplineIndex].efiEventsDisciplinesCategoryList.push({...categoryObj});
        setDisciplines(disciplinesCopy);
    }
    const updateDiscipline = (index, disciplineModifiedObj) => {
        const disciplineCopy = [...disciplines];
        disciplineCopy[index] = {...disciplineModifiedObj};
        setDisciplines(disciplineCopy);
    }
    const updateCategory = (index, categoryIndex, category) => {
        const disciplineCopy = [...disciplines];
        disciplineCopy[index].efiEventsDisciplinesCategoryList[categoryIndex] = {...category};
        setDisciplines(disciplineCopy);
    }
    const removeDiscipline = (index) => {
        const disciplineCopy = [...disciplines];
        disciplineCopy.splice(index, 1);
        setDisciplines(disciplineCopy);
    }
    const removeCategory = (index, categoryIndex) => {
        const disciplineCopy = [...disciplines];
        disciplineCopy[index].efiEventsDisciplinesCategoryList.splice(categoryIndex, 1);
        setDisciplines(disciplineCopy);
    }
    const eventModify = async() => {
        const formDetails = {
            ...eventObj,
            eventName,
            eventStatus,
            eventEntryFee,
            organizerName,
            contactPhoneNumber,
            contactEmailId,
            eventVenueAddress,
            eventCity,
            eventState,
            eventPinCode,
            eventStartDate,
            eventEndDate,
            about,
            remarks: '',
            createdBy: '',
            createdDate: getTimestamp(),
            efiEventsDisciplinesList: [...disciplines]
        }
        try {
            if(eventStage === 'Update') {
                await updateEventAPI(formDetails);
                toast.success('Updated event successfully!');
            } else {
                await createEventAPI(formDetails);
                toast.success('Created event successfully!');
            }
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
        const inValid = disciplines.length === 0 || disciplines.some(discipline => {
            return discipline.efiEventsDisciplinesCategoryList.length === 0
        });
        if (eventStatus === EVENT_STATUS.REGISTER && form.checkValidity() === true && inValid) {
            toast.info('Add discipline(s) and categorie(s)');
            return;
        }
        if (form.checkValidity() === true) {
            eventModify();
        } else {
            toast.info('Fill all the required fields!');
        }
        setValidated(true);
    };
    return (
        <>
            {eventStage === 'Create' ? (<h2>
                {eventStage} Event
            </h2>) : (
                <h2>
                    <Link to={NAV_ROUTES.DRAFTEVENTSLIST} style={{
                        marginRight: '10px'
                    }}><i className="fa fa-arrow-left"></i></Link>{eventStage} Event
                </h2>
            )}
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
                marginBottom: '20px',
            }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <Tabs activeKey={activeIndex} onSelect={(activeKey) => setActiveIndex(activeKey)}>
                                <Tab eventKey="home" title="Event Details">
                                    <div className="card-body">
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                <Form.Label>Event name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Event name"
                                                    value={eventName}
                                                    onChange={(e) => setEventName(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Event name required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                <Form.Label>Event status</Form.Label>
                                                <Form.Control
                                                    required
                                                    className="form-select"
                                                    as="select"
                                                    type="select"
                                                    value={eventStatus}
                                                    onChange={(e) => setEventStatus(e.target.value)}
                                                >
                                                    <option value="">Select Event status</option>
                                                    <option value={EVENT_STATUS.DRAFT}>Draft</option>
                                                    <option value={EVENT_STATUS.REGISTER}>Publish</option>
                                                </Form.Control>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Event status required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                <Form.Label>Event entry fee</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Event name"
                                                    value={eventEntryFee}
                                                    onChange={(e) => setEventEntryFee(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Event entry fee required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                                <Form.Label>Organizer name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Organizer name"
                                                    value={organizerName}
                                                    onChange={(e) => setOrganizerName(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Organizer name required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                                <Form.Label>Phone number</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Contact Phone Number"
                                                    value={contactPhoneNumber}
                                                    onChange={(e) => setContactPhoneNumber(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Phone number required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom06">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Email"
                                                    value={contactEmailId}
                                                    onChange={(e) => setContactEmailId(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Email required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="4" controlId="validationCustom07">
                                                <Form.Label>Event venue address</Form.Label>
                                                <Form.Control
                                                    required
                                                    as="textarea"
                                                    type="textarea"
                                                    placeholder="Venue address"
                                                    value={eventVenueAddress}
                                                    onChange={(e) => setEventVenueAddress(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Event Venue address required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom08">
                                                <Form.Label>Event city</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Event city"
                                                    value={eventCity}
                                                    onChange={(e) => setEventCity(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Event city required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom09">
                                                <Form.Label>Event state</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Event state"
                                                    value={eventState}
                                                    onChange={(e) => setEventState(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Event state required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="4" controlId="validationCustom010">
                                                <Form.Label>Pincode</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Enter Pincode"
                                                    value={eventPinCode}
                                                    onChange={(e) => setEventPinCode(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Pincode required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom011">
                                                <Form.Label>Event start date</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="date"
                                                    placeholder="Event start date"
                                                    value={eventStartDate}
                                                    onChange={(e) => setEventStartDate(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Event start date required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom012">
                                                <Form.Label>Event end date</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="date"
                                                    placeholder="Event end date"
                                                    value={eventEndDate}
                                                    onChange={(e) => setEventEndDate(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Event end date required.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="12" controlId="validationCustom013">
                                                <Form.Label>About</Form.Label>
                                                <Form.Control
                                                    required
                                                    as="textarea"
                                                    type="textarea"
                                                    rows={5}
                                                    placeholder="Brief description about the event"
                                                    value={about}
                                                    onChange={(e) => setAbout(e.target.value)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    About required.
                                                </Form.Control.Feedback>
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
                                    <div className="card-body">
                                        {
                                            disciplines.map((discipline, index) => {
                                                return (
                                                    <Row key={index} style={{
                                                            border: '1px solid silver',
                                                            padding: '20px 0px',
                                                            marginBottom: '20px'
                                                        }} 
                                                        className="mb-3"
                                                    >
                                                        <Form.Group as={Col} md="4" controlId={`validationCustom015${index}`}>
                                                            <Form.Label>Discipline name</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    className="form-select"
                                                                    as="select"
                                                                    type="select"
                                                                    value={discipline.eventDisciplineName}
                                                                    onChange={(e) => {
                                                                        updateDiscipline(index, {
                                                                            ...discipline,
                                                                            eventDisciplineName: e.target.value
                                                                        });
                                                                    }}
                                                                    disabled={discipline.efiEventsDisciplinesCategoryList.some(item => {
                                                                        return item.eventCategoryName.length > 0
                                                                    }
                                                                    )}
                                                                >
                                                                    <option value="">Select Discipline</option>
                                                                    {
                                                                        Object.keys(DISCIPLINE_CONF).map(disType => <option value={disType}>{disType}</option>)
                                                                    }
                                                                </Form.Control>
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                <Form.Control.Feedback type="invalid">
                                                                    Event status required.
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="4" controlId={`validationCustom016${index}`}>
                                                                <Form.Label>Discipline start date</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="date"
                                                                    placeholder="Discipline start date"
                                                                    value={discipline.eventDisciplineStartDate}
                                                                    onChange={(e) => {
                                                                        updateDiscipline(index, {
                                                                            ...discipline,
                                                                            eventDisciplineStartDate: e.target.value
                                                                        });
                                                                    }}
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                <Form.Control.Feedback type="invalid">
                                                                    Discipline start date required.
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <Form.Group as={Col} md="4" controlId={`validationCustom017${index}`}>
                                                                <Form.Label>Discipline end date</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="date"
                                                                    placeholder="Discipline end date"
                                                                    value={discipline.eventDisciplineEndDate}
                                                                    onChange={(e) => {
                                                                        updateDiscipline(index, {
                                                                            ...discipline,
                                                                            eventDisciplineEndDate: e.target.value
                                                                        });
                                                                    }}
                                                                />
                                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                <Form.Control.Feedback type="invalid">
                                                                    Discipline end date required.
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                            <div style={{
                                                                margin: '10px 0px',
                                                                fontWeight: 'bold',
                                                                fontSize: '20px'
                                                            }}>
                                                                Categories
                                                            </div>
                                                            <div>
                                                            {
                                                                eventStatus === EVENT_STATUS.REGISTER &&
                                                                discipline.efiEventsDisciplinesCategoryList.length === 0 && (
                                                                    <Alert style={{
                                                                        margin: '10px',
                                                                        maxWidth: '90%'
                                                                    }} key="danger" variant="danger">
                                                                        Atleast one category is required to publish the event with this discipline.
                                                                    </Alert>
                                                                )
                                                            }
                                                            {
                                                                discipline.efiEventsDisciplinesCategoryList.length === 0 ? (<Button onClick={()=>{
                                                                    addCategory(index)
                                                                }}>Add</Button>) : <></>
                                                            }
                                                            </div>
                                                            {
                                                                discipline.efiEventsDisciplinesCategoryList.map((category, categoryIndex) => (
                                                                    <div key={categoryIndex} style={
                                                                        (eventStatus === EVENT_STATUS.PUBLISH && category.efiEventsDisciplinesCategoryId && category.efiEventsDisciplinesCategoryId === selectedCategory) ? {
                                                                            background: 'whitesmoke'
                                                                        } : {}
                                                                    }>
                                                                            <div style={{
                                                                                    marginBottom: '20px',
                                                                                }}>
                                                                                <Row>
                                                                                    <Form.Group as={Col} md="3" controlId={`validationCustom017${index}${categoryIndex}`}>
                                                                                        <Form.Label>Category name</Form.Label>
                                                                                        <Form.Control
                                                                                            required
                                                                                            className="form-select"
                                                                                            as="select"
                                                                                            type="select"
                                                                                            value={category.eventCategoryName}
                                                                                            style={{
                                                                                                width: '200px'
                                                                                            }}
                                                                                            onChange={(e) => {
                                                                                                updateCategory(index, categoryIndex, {
                                                                                                    ...category,
                                                                                                    eventCategoryName: e.target.value,
                                                                                                    horseQualification: e.target.value
                                                                                                })
                                                                                            }}
                                                                                        >
                                                                                            <option value="">Select Category</option>
                                                                                            {
                                                                                                DISCIPLINE_CONF[discipline.eventDisciplineName]?.map((catType, index) => <option key={index} value={catType}>{catType}</option>)
                                                                                            }
                                                                                        </Form.Control>
                                                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                                        <Form.Control.Feedback type="invalid">
                                                                                            Category name required.
                                                                                        </Form.Control.Feedback>
                                                                                    </Form.Group>
                                                                                    <Form.Group as={Col} md="3" controlId={`validationCustom0119${index}${categoryIndex}`}>
                                                                                        <Form.Label>No. of rounds</Form.Label>
                                                                                        <Form.Control
                                                                                            required
                                                                                            type="text"
                                                                                            placeholder="Enter qualification"
                                                                                            value={category.noOfRounds}
                                                                                            style={{
                                                                                                width: '200px'
                                                                                            }}
                                                                                            onChange={(e) => {
                                                                                                updateCategory(index, categoryIndex, {
                                                                                                    ...category,
                                                                                                    noOfRounds: e.target.value
                                                                                                })
                                                                                            }}
                                                                                        /> 
                                                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                                        <Form.Control.Feedback type="invalid">
                                                                                            Round name required.
                                                                                        </Form.Control.Feedback>
                                                                                    </Form.Group>
                                                                                    <Form.Group as={Col} md="6" controlId={`validationCustom019${index}${categoryIndex}`}>
                                                                                        <Form.Label>Horse qualification</Form.Label>
                                                                                        <div style={{
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                        }}>
                                                                                            <Form.Control
                                                                                                required
                                                                                                type="text"
                                                                                                placeholder="Enter qualification"
                                                                                                value={category.horseQualification}
                                                                                                style={{
                                                                                                    width: '200px'
                                                                                                }}
                                                                                                onChange={(e) => {
                                                                                                    updateCategory(index, categoryIndex, {
                                                                                                        ...category,
                                                                                                        horseQualification: e.target.value
                                                                                                    })
                                                                                                }}
                                                                                            />
                                                                                            <div>
                                                                                                <Button
                                                                                                    onClick={() => {
                                                                                                        removeCategory(index, categoryIndex);
                                                                                                    }}
                                                                                                    variant='danger'
                                                                                                    style={{
                                                                                                        margin: '0px 10px'
                                                                                                    }}
                                                                                                >
                                                                                                    X
                                                                                                </Button>
                                                                                                {
                                                                                                    discipline.efiEventsDisciplinesCategoryList.length === (categoryIndex + 1) ? (<Button onClick={()=>{
                                                                                                        addCategory(index)
                                                                                                    }}>Add</Button>) : <></>
                                                                                                }
                                                                                                {
                                                                                                    eventStatus === EVENT_STATUS.PUBLISH && category.efiEventsDisciplinesCategoryId > 0 && (
                                                                                                        <Button
                                                                                                            onClick={() => {
                                                                                                                toggleEntries(category.efiEventsDisciplinesCategoryId);
                                                                                                            }}
                                                                                                            variant='danger'
                                                                                                            style={{
                                                                                                                background: 'white',
                                                                                                                margin: '0px 10px',
                                                                                                                padding: '5px'
                                                                                                            }}
                                                                                                        >
                                                                                                            <a href="javascript:void(0);" className="f-14 me-2"><i className="fa fa-eye"></i> Entries</a>
                                                                                                        </Button>
                                                                                                    )
                                                                                                }
                                                                                            </div>
                                                                                        </div>
                                                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                                                        <Form.Control.Feedback type="invalid">
                                                                                            Horse qualification required.
                                                                                        </Form.Control.Feedback>
                                                                                    </Form.Group>
                                                                                </Row>
                                                                            </div>
                                                                            {
                                                                                eventStatus === EVENT_STATUS.PUBLISH && selectedCategory > 0 && category.efiEventsDisciplinesCategoryId === selectedCategory && (
                                                                                    <EventsRequests catId={category.efiEventsDisciplinesCategoryId} />
                                                                                )
                                                                            }
                                                                    </div>
                                                                ))
                                                            }
                                                            <div>
                                                                <Button variant="danger" onClick={() => {
                                                                    removeDiscipline(index);
                                                                }} style={{
                                                                    display: 'block',
                                                                    marginTop: '20px',
                                                                    float: 'right'
                                                                }}>Remove Discipline</Button>
                                                            </div>
                                                        </Row>
                                                    );
                                                })
                                            }
                                            {
                                                eventStatus === EVENT_STATUS.REGISTER &&
                                                disciplines.length === 0 && (
                                                    <Alert style={{
                                                        margin: '10px'
                                                    }} key="danger" variant="danger">
                                                        Atleast one discipline is required to publish the event.
                                                    </Alert>
                                                )
                                            }
                                        <div>
                                            <Button onClick={addDiscipline} style={{
                                                display: 'block'
                                            }}>+ Add Disciplines</Button>
                                        </div>
                                    </div>
                                    <Row>
                                        <div>
                                            <Button style={{
                                                display: 'block',
                                                float: 'right',
                                            }} type="submit">{eventStage} Event</Button>
                                        </div>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
                {/* <Row>
                    <div>
                        <Button style={{
                            width: '100px',
                            display: 'block',
                            float: 'right',
                        }} type="submit">{eventStage}</Button>
                    </div>
                </Row> */}
            </Form>
        </>
    )
}