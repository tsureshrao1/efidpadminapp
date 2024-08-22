import { useState, useEffect } from 'react';
import { fetchAllEvents } from '../../services/eventsService';
import userProfilePic from '/images/rider.jpg';
import { formatDate } from '../../services/dateutils';
import { toast } from 'react-toastify';
import { NAV_ROUTES } from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';
const cardStyles = {
    padding:0,
}

export default function EventsList({eventsStatus}) {
    const [requestData, setRequestData] = useState([]);
    const { state } = useAppContext();
    const { userData } = state;
    const location = useLocation();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchAllEvents();
                const filtererdEvents = response.filter(event => event?.eventStatus?.includes(eventsStatus))
                setRequestData(filtererdEvents);
            } catch (err) {
                toast.error(err);
            }
        };
        fetchData();
    }, [eventsStatus]);
    return (
        <>
            <div className="page-content" >
                <div className="section-full bg-img-fix">
                    <div className="container" style={{padding: '0px'}}>
                        <div className="section-head">
                            <div style={{ "min-height": "49vh" }}>
                                <div className="pcoded-main-container" style={{ "margin-right": "0px" }}>
                                    <div className="pcoded-content">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card table-card bg-white" style={cardStyles}>
                                                    <div className="card-header borderless" style={{"border-bottom": "var(--bs-card-border-width) solid var(--bs-card-border-color)","padding":"8px"}}>
                                                        <div className="row">
                                                            <div className="col-md-6"><h5>Events list</h5></div>
                                                            <div className="col-md-6 text-end">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body p-0">
                                                        <div className="table-responsive">
                                                            <div className="recent-scroll" style={{"position": "relative" }}>
                                                                <table className="table table-hover">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                Photo
                                                                            </th>
                                                                            <th>
                                                                                Name
                                                                            </th>
                                                                            <th>
                                                                                Organizer
                                                                            </th>
                                                                            <th>
                                                                                Venue
                                                                            </th>
                                                                            <th>
                                                                                Start Date
                                                                            </th>
                                                                            <th>
                                                                                View
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {requestData?.map((obj) => (
                                                                            <tr style={{
                                                                                verticalAlign: 'middle'
                                                                            }} key={obj?.id}>
                                                                                <td><img className="rounded-circle" style={{ "width": "40px" }} src={obj.profilePhoto || userProfilePic} alt="activity-user" /></td>
                                                                                <td>
                                                                                    <p className="text-muted">{obj?.eventName}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className="text-muted">{obj?.organizerName}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className="text-muted">{obj?.eventVenueAddress}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <p className="text-muted">{formatDate(obj?.eventStartDate)}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <Link to={`${NAV_ROUTES.EVENT_DETAILS.split(':')[0]}${obj.efiEventId}`} state={{
                                                                                        from: location.pathname
                                                                                    }} className="f-20 me-2"><i className="fa fa-eye"></i></Link>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
