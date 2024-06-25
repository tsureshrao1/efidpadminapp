import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { fetchEventsByStatus } from '../../services/eventsService';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { fetchEventEntriesByCatId, approveEventEntry } from '../../services/eventsService';
export default function EventsRequests() {
    const [eventsData, setEventsData] = useState([]);
    const [eventEntries, setEventEntries] = useState([]);
    const horses = [
        '',
        'Star',
        'Sugar',
        'Sunny',
        'Sunshine'
    ];
    const getPublishedEvents = async () => {
        const reponse = await fetchEventsByStatus('published');
        const items = [];
        reponse.map((event) => {
            const obj = {
                name: event.eventName,
                items: []
            }
            event.efiEventsDisciplinesList.map((dis) => {
                dis.efiEventsDisciplinesCategoryList.map((cat) => {
                    obj.items.push({
                        name: `${dis.eventDisciplineName} - ${cat.eventCategoryName}`,
                        catId: cat.efiEventsDisciplinesCategoryId
                    });
                });
            });
            items.push(obj)
        });
        setEventsData(items);
    }
    const getEntriesForCat = async (sub) => {
        const resp = await fetchEventEntriesByCatId(sub.catId)
        setEventEntries(resp);
    }
    const approveEntry = async (eventEntry) => {
        const reqObj = {
            ...eventEntry,
            status: 'ACTIVE',
            entryStatus: 'ACTIVE'
        }
        try {
            const resp = await approveEventEntry(reqObj);
            toast.success('Event entry approved!');
            const entriesResp = await fetchEventEntriesByCatId(reqObj.efiEventsDisciplinesCategoryId)
            setEventEntries(entriesResp);
        } catch(e) {
            toast.error(e.message);
            console.log(e);
        }
    }
    useState(()=>{
        getPublishedEvents();
    }, [])
    return (
        <div style={{
            display: 'flex',
            height: 'calc(-205px + 100vh)'
        }}>
            <SidebarMenu style={{
                width: '300px',
                maxHeight: 'calc(-74px + 100vh)',
                overflow: 'auto'
            }}>
                <SidebarMenu.Body>
                    {
                        eventsData.map(item => (
                            <SidebarMenu.Sub>
                                <SidebarMenu.Sub.Toggle style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    borderRadius: '0px',
                                    border: '1px solid silver'
                                }}>
                                    <SidebarMenu.Nav.Title>
                                        {item.name}
                                    </SidebarMenu.Nav.Title>
                                </SidebarMenu.Sub.Toggle>
                                {
                                    item.items.map(sub => (
                                        <SidebarMenu.Sub.Collapse>
                                            <SidebarMenu.Nav style={{
                                                        padding: '5px 20px',
                                                        border: '1px solid silver',
                                                        background: 'white'
                                                    }}
                                                    onClick={() => {
                                                        getEntriesForCat(sub)
                                                    }}
                                                    >
                                                <SidebarMenu.Nav.Link>
                                                    <SidebarMenu.Nav.Title>
                                                        {sub.name}
                                                    </SidebarMenu.Nav.Title>
                                                </SidebarMenu.Nav.Link>
                                            </SidebarMenu.Nav>
                                        </SidebarMenu.Sub.Collapse>
                                    ))
                                }
                            </SidebarMenu.Sub>
                        ))
                    }
                </SidebarMenu.Body>
            </SidebarMenu>
            <div style={{
                flex: '1',
                maxHeight: 'calc(-74px + 100vh)',
                overflow: 'auto',
                padding: '10px'
            }}>
                <h2>
                    Event Requests
                </h2>
                <Table striped="columns">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Raider Name</th>
                        <th>Horse Name</th>
                        <th>Borrowed</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            eventEntries.map((entry, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{entry.createdBy}</td>
                                    <td>{horses[entry.horseId]}</td>
                                    <td>{entry.borrowHorse ? 'Yes' : 'No'}</td>
                                    <td>
                                        {
                                            entry.entryStatus === 'ACTIVE' ? 'Approved' : (
                                                <Button onClick={
                                                    () => {approveEntry(entry)}
                                                }>Approve</Button>
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
        </div>
    )
}