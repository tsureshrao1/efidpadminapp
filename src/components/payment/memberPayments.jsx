import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { getPaymentDetailsByUserId } from "../../services/apiService";
import { format } from "date-fns";
import { formatFormDate } from "../../services/dateutils";

export default function MemberPayment ({userId}) {
    const cardStyle = {
        padding: '0px'
    }
    const [paymentDetails, setPaymentDetails] = useState([]);
    const getPaymentDetails = async (userId) => {
        const response = await getPaymentDetailsByUserId(userId);
        setPaymentDetails(response);
    }
    useEffect(() => {
       getPaymentDetails(userId) 
    }, [userId])
    return (<>
        { paymentDetails?.length > 0 && (<div className="col-md-12">
            <div className="card" style={cardStyle}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapsee789" aria-expanded="true" aria-controls="collapsee789">
                                Payment
                            </button>
                        </h2>
                        <div id="collapsee789" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="card-body">
                                    <Table striped="columns">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Bank Name</th>
                                                <th>Amount Paid</th>
                                                <th>Reference Number</th>
                                                <th>Paymnet Type</th>
                                                <th>Payment Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                paymentDetails.map((payment, index) => {
                                                    return (
                                                        <>
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{payment?.bankName}</td>
                                                                <td>{payment?.amountPaid}</td>
                                                                <td>{payment?.paymentGatewayId}</td>
                                                                <td>{payment?.paymentType}</td>
                                                                <td>{formatFormDate(payment?.paymentDate)}</td>
                                                            </tr>
                                                            <tr key={`r${index}`}>
                                                                <td></td>
                                                                <td>Comments</td>
                                                                <td colSpan={4}>{payment?.additionalComments}</td>
                                                            </tr>
                                                        </>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>) }
        </>
    )
}