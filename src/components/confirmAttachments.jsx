import { Row, Col } from "react-bootstrap";
import Accordion from "./accordion";
import AttachmentTable from "./attachmentTable";

export default function ConfirmAttachments({attachments}) {
    return (
        <Accordion
            title={"Attach Documents"}
            id="attach_documents"
        >
            <Row>
                <Col md={12}>
                    <AttachmentTable attachments={attachments} showDelete={false} />
                </Col>
            </Row>
        </Accordion>
    )
}