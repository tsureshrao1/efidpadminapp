import { useEffect, useState } from "react";
import { getPaymentDetailsById } from "../../../services/apiService";

export default function PaymentDetails({id, comment}) {
    const [data, setData] = useState({});
    const getMoreDetails = async () => {
        let response = await getPaymentDetailsById(id);
        setData(response.data);
    }
    useEffect(() => {
        getMoreDetails();
    }, [id]);

    return (
        <div>
            <p><strong>Entity: </strong>{data.entityName}</p>
            <p><strong>Payment Type: </strong>{data.paymentType}</p>
            <p><strong>Amount Paid: </strong>{data.amountPaid}</p>
            <p><strong>Payment Reference: </strong>{data.paymentOrderId}</p>
            <p><strong>Bank Name: </strong>{data.bankName}</p>
            {comment  && (
                <>
                    <div>
                        <strong>Comments: </strong>
                    </div>
                    <div>
                        {comment}
                    </div>
                </>
            )}
        </div>
    );

}