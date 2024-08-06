import { useEffect, useState } from "react"
import { getHorseDetailsById, getRiderDetailsById } from "../../services/apiService";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useAppContext } from "../../context";
import { EVENT_STATUS, USER_ROLES } from "../../utils/constants";
import ConfirmModal from "../../components/modals/confirm";

export const EntryDetails = ({entryObj, approveEntry}) => {
    const {entryStatus} = entryObj;
    const [horse, setHorse] = useState();
    const [showConfirm, setShowConfirm] = useState(false);
    const [rider, setRider] = useState();
    const [approvalComments, setApprovalComments] = useState();
    const {state} = useAppContext();
    const {userData} = state;
    const getDetails = async () => {
        const horseResponse = await getHorseDetailsById(entryObj.horseId);
        const riderResponse = await getRiderDetailsById(entryObj.riderId);
        setHorse(horseResponse);
        setRider(riderResponse);
        console.log(horseResponse, riderResponse)
    }

    const sendApproval = (approved) => {
        let status =  '';
        if(approved) {
            status = userData.userRole === USER_ROLES.ADMIN
            ? entryStatus.replace(EVENT_STATUS.REGISTER, EVENT_STATUS.REVIEW)
            : EVENT_STATUS.PUBLISH;
        } else {
            if(!approvalComments) {
                toast.error('Comment is mandatory to reject an entry!');
                return;
            }
            status = userData.userRole === USER_ROLES.ADMIN
            ? entryStatus.replace(EVENT_STATUS.REGISTER, EVENT_STATUS.REJECT)
            : entryStatus.replace(EVENT_STATUS.REVIEW, EVENT_STATUS.REJECT);
        }
        const comment = entryObj.approvalComments ?
            approvalComments ? 
                `${new Date().toLocaleString()}: ${userData.userName}: ${approvalComments}@_&_@${entryObj.approvalComments}` :
                '' :
                `${new Date().toLocaleString()}: ${userData.userName}: ${approvalComments}`;

        approveEntry({
            ...entryObj,
            entryStatus: status,
            status,
            approvalComments: comment
        });

    }


    useEffect(() => {
        getDetails()
    }, [entryObj])
    return (
        <>
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>Raider Club Name</th>
                        <th>Raider EFI Number</th>
                        <th>Horse Club/Owner Name</th>
                        <th>Horse EFI Number</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>{rider?.clubName}</td>
                        <td>{rider?.efiRegistrationNumber}</td>
                        <td>{horse?.clubName || horse?.nameOfOwner}</td>
                        <td>{horse?.efiRegistrationNumber}</td>
                    </tr>
                </thead>
            </Table>
            <Row>
                { entryObj?.approvalComments && 
                    <Col md="12" style={{
                        marginBottom: '20px'
                    }}>
                        <label className="form-label">Comments</label>
                        {entryObj?.approvalComments?.split('@_&_@')?.map((comment, index) => (
                            <p key={index}>{comment}</p>
                        ))}
                    </Col>
                }
                <Form.Group as={Col} md="12" controlId={`validationCustom0178`}>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="textarea"
                        placeholder="Enter approval/rejected comments"
                        value={approvalComments}
                        onChange={(e) => setApprovalComments(e.target.value)}
                    />
                </Form.Group>
                <div style={{
                    marginTop: '20px'
                }}>
                    <Button style={{
                        display: 'block',
                        float: 'right',
                    }}  onClick={() => {sendApproval(true)}}>Approve</Button>
                    
                    <Button variant="danger" style={{
                        display: 'block',
                        float: 'right',
                        marginRight: '20px'
                    }} onClick={() => {setShowConfirm(true)}}>Reject</Button>
                </div>
            </Row>
            <ConfirmModal onConfirm={() => sendApproval(false)} display={showConfirm} setDisplay={setShowConfirm} />
        </>
    )
}