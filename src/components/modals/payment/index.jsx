import { useEffect, useState } from "react";
import { getPaymentDetailsById } from "../../../services/apiService";

export default function PaymentDetails({id}) {
    const [data, setData] = useState({});
    const getMoreDetails = async () => {
        let response = await getPaymentDetailsById();
        setData(response);
    }
    useEffect(() => {
        getMoreDetails();
    }, [id]);

    return (
        <div>
            <p><strong>Payment Reference: </strong>{data.paymentOrderId}</p>
            <p><strong>Bank Name: </strong>{data.bankName}</p>
        </div>
    );

}