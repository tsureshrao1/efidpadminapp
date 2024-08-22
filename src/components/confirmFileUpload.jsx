import { Row, Col } from "react-bootstrap";
import Accordion from "./accordion";
import FileUploader from "./fileuploader";

export default function ConfirmFileUpload({updateFileDetails, attachments, attachType}) {
    return (
        <Accordion
            title={"File Upload"}
            id="file_documents"
        >
            <Row>
                <Col md={12}>
                    <FileUploader onFileSelect={updateFileDetails} fileAttachment={attachments} attachType={attachType} />
                </Col>
            </Row>
        </Accordion>
    )
}