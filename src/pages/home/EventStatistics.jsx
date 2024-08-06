import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { getAllEvents } from "../../services/apiService"
import { STATUS_VIEW } from "../../utils/constants";

export const EventStatistics = () => {
    const [data, setData] = useState({});
    const getInfo = async () => {
        const resp = await getAllEvents();

        const finalObj = {};

        for(let i=0; i < resp.length; i++) {
            if(finalObj[resp[i].eventStatus]) {
                finalObj[resp[i].eventStatus] = finalObj[resp[i].eventStatus]++;
            } else {
                finalObj[resp[i].eventStatus] = 1;
            }
        }

        setData(finalObj);
    }
    useEffect(() => {
        getInfo()
    }, [])
    return (
        <Table striped="columns">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(data).map((item,i) => {
                        return (
                            <tr key={i}>
                                <td>{STATUS_VIEW[item]}</td>
                                <td style={{
                                    color: 'rgb(255, 130, 66)',
                                    fontWeight: 'bold'
                                }}>{data[item]}</td>
                            </tr>
                        )
                    })
                }
                {
                    Object.keys(data).length === 0 && (
                        <tr>
                            <td colSpan={2}>
                                No Records
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}