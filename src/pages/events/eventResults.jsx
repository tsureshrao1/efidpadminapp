import { useState } from 'react';
import { Table } from 'react-bootstrap';
export default function EventsResults({catId}) {
    const [eventResults, setEventResults] = useState([]);
    const getResultsForCat = async (catId) => {
        // const resp = await fetchEventEntriesByCatId(catId)
        setEventResults([]);
    }
    useState(()=>{
        getResultsForCat(catId);
    // @ts-ignore
    }, [])
    return (
        <div style={{
            margin: '10px 0px'
        }}>
            <h5>
                Requests
            </h5>
            <Table striped="columns">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Raider Name</th>
                    <th>Horse Name</th>
                    <th>Round name</th>
                    <th>Entry type</th>
                    <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        eventResults.map((entry, index) => (
                            <tr key={`row${index}`}>
                                <td>{index + 1}</td>
                                <td>{entry.riderName}</td>
                                <td>{entry.horseName}</td>
                                <td>{entry.borrowHorse ? 'Yes' : 'No'}</td>
                                <td>{entry.teamEntry ? 'Yes' : 'No'}</td>
                                <td>{entry.individualEntry ? 'Yes' : 'No'}</td>
                            </tr>
                        ))
                    }
                    {
                        eventResults.length === 0 && (
                            <tr>
                                <td style={{textAlign: 'center'}} colSpan={5}>Under Construction</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}