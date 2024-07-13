import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { fetchEventEntriesByCatId, approveEventEntry } from '../../services/eventsService';
import { useAppContext } from '../../context';
import { EVENT_STATUS, MEM_TYPES, USER_ROLES } from '../../utils/constants';
import { usePopupContext } from '../../context/popupContext';
import { useCanvasContext } from '../../context/canvasContext';
export default function EventsRequests({catId}) {
    const [eventEntries, setEventEntries] = useState([]);
    const {setPopupContent, setDisplayPopup} = usePopupContext()
    const { setCanvasContent, setDisplayCanvas } = useCanvasContext();
    const { state } = useAppContext();
    const { userData } = state;
    const getEntriesForCat = async (catId) => {
        const resp = await fetchEventEntriesByCatId(catId);
        setEventEntries(resp);
    }
    const approveEntry = async (eventEntry) => {
        const reqObj = {
            ...eventEntry,
            status: userData.userRole === USER_ROLES.ADMIN ? EVENT_STATUS.REVIEW : EVENT_STATUS.PUBLISH,
            entryStatus: userData.userRole === USER_ROLES.ADMIN ? EVENT_STATUS.REVIEW : EVENT_STATUS.PUBLISH
        }
        try {
            await approveEventEntry(reqObj);
            toast.success('Event entry approved!');
            const entriesResp = await fetchEventEntriesByCatId(reqObj.efiEventsDisciplinesCategoryId)
            setEventEntries(entriesResp);
        } catch(e) {
            toast.error(e.message);
            console.log(e);
        }
    }
    const showDetails = (title, type, id) => {
        setPopupContent({
            title,
            details: undefined,
            getId: id,
            regReqType: type
        });
        setDisplayPopup(true);
    }
    useEffect(()=>{
        getEntriesForCat(catId);
    }, [catId])
    return (
        <div style={{
            margin: '10px 0px'
        }}>
            <h5>
                Event Requests
            </h5>
            <Table striped="columns">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Raider Name</th>
                    <th>Horse Name</th>
                    <th>Payment</th>
                    <th>Borrowed</th>
                    <th>Team Entry</th>
                    <th>Individual Entry</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        eventEntries.map((entry, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><a href="javascript:void(0)" onClick={() => {showDetails('Rider Details', 'RIDER', entry.riderId)}}>{entry.riderName}</a></td>
                                <td><a href="javascript:void(0)" onClick={() => {showDetails('Horse Details', 'HORSE', entry.horseId)}}>{entry.horseName}</a></td>
                                <td><a href="javascript:void(0)" onClick={() => {setCanvasContent({title:'Payment Details!', type:MEM_TYPES.PAYMENT, data:{
                                    id: entry.paymentId,
                                    comment: entry.additionalDetails
                                }}); setDisplayCanvas(true)}}>View details</a></td>
                                <td>{entry.borrowHorse ? 'Yes' : 'No'}</td>
                                <td>{entry.teamEntry ? 'Yes' : 'No'}</td>
                                <td>{entry.individualEntry ? 'Yes' : 'No'}</td>
                                <td>
                                    {
                                        userData.userRole === USER_ROLES.ADMIN && (
                                            <>
                                                {
                                                    entry.entryStatus === EVENT_STATUS.PUBLISH ? <span style={{color: 'green'}}>Approved</span> : entry.entryStatus === 'REVIEWED' ? <span style={{color: 'red'}}>Approval Pending</span> : (
                                                        <Button onClick={
                                                            () => {approveEntry(entry)}
                                                        }>Submit Review</Button>
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                    {
                                        userData.userRole === USER_ROLES.SEC_ADMIN && (
                                            <>
                                                {
                                                    entry.entryStatus === EVENT_STATUS.PUBLISH ? <span style={{color: 'green'}}>Approved</span> : entry.entryStatus === EVENT_STATUS.REGISTER ? <span style={{color: 'red'}}>Review Pending</span> : (
                                                        <Button onClick={
                                                            () => {approveEntry(entry)}
                                                        }>Approve</Button>
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                </td>
                            </tr>
                        ))
                    }
                    {
                        eventEntries.length === 0 && (
                            <tr>
                                <td colSpan={5}>No Entries found</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}