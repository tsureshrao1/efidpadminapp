import { useState, useEffect } from 'react';
import { fetchEventsByStatus } from '../../services/eventsService';
import userProfilePic from '/images/rider.jpg';
import { formatDate } from '../../services/dateutils';
import EventDetailsPopup from '../../components/modals/events/viewEventDetailsPopup';
import { toast } from 'react-toastify';

const cardStyles = {
    padding:0,
    "--bs-card-spacer-y":" 1rem",
    "--bs-card-spacer-x":" 1rem",
    "--bs-card-title-spacer-y":" 0.5rem",
    "--bs-card-border-width":" var(--bs-border-width)",
    "--bs-card-border-color":" var(--bs-border-color-translucent)",
    "--bs-card-border-radius":" var(--bs-border-radius)",
    "--bs-card-inner-border-radius":" calc(var(--bs-border-radius) - (var(--bs-border-width)))",
    "--bs-card-cap-padding-y":" 0.5rem",
    "--bs-card-cap-padding-x":" 1rem",
    "--bs-card-cap-bg":" rgba(var(--bs-body-color-rgb), 0.03)",
    "--bs-card-bg":" var(--bs-body-bg)",
    "--bs-card-img-overlay-padding":" 1rem",
    "--bs-card-group-margin":" 0.75rem",
    "position":" relative",
    "display":" flex",
    "flex-direction":" column",
    "min-width":" 0",
    "height":" var(--bs-card-height)",
    "color":" var(--bs-body-color)",
    "word-wrap":" break-word",
    "background-color":" var(--bs-card-bg)",
    "background-clip":" border-box",
    "border":" var(--bs-card-border-width) solid var(--bs-card-border-color)",
    "border-radius":" var(--bs-card-border-radius"

}

export default function EventsList({eventsStatus}) {
    const [requestData, setRequestData] = useState([]);
    const [showdetailsPopup, setShowdetailsPopup] = useState(false);
    const [count, setCount] = useState(0);
    const [eventObj, setEventObj] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchEventsByStatus(eventsStatus);
                setRequestData(response);
            } catch (err) {
                toast.error(err);
            }
        };
        fetchData();
    }, [count, eventsStatus]);


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
                                                                                Location
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
                                                                            <tr key={obj?.id}>
                                                                                <td><img className="rounded-circle" style={{ "width": "40px" }} src={obj.profilePhoto || userProfilePic} alt="activity-user" /></td>
                                                                                <td>
                                                                                    <p className="m-0">{obj?.eventName}</p>
                                                                                </td>
                                                                                <td>
                                                                                    <h6 className="text-muted">{obj?.eventCity}</h6>
                                                                                </td>
                                                                                <td>
                                                                                    <h6 className="text-muted">{formatDate(obj?.eventStartDate)}</h6>
                                                                                </td>
                                                                                <td>
                                                                                    <a href="javascript:void(0);" onClick={() => {setEventObj(obj); setShowdetailsPopup(true)}} className="f-20 me-2"><i className="fa fa-eye"></i></a>
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
            {
                showdetailsPopup ? <EventDetailsPopup eventObj={eventObj} setCount={setCount} count={count} setShowdetailsPopup={setShowdetailsPopup} /> : <></>
            }
        </>
    )
}
