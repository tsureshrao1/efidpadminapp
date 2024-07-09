import AttachmentTable from "../../../components/attachmentTable";
import { formatDate } from "../../../services/dateutils";

export default function EventInfoTab({eventObj}) {
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3">
                        <label className="form-label text-gray-dark" for="userName">Event Name</label>
                        <p>{eventObj?.eventName}</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Event status</label>
                    <p>Ready to register</p>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Event entry fee</label>
                    <p>{eventObj?.eventEntryFee}</p>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Event entry late fee</label>
                    <p>{eventObj?.eventEntryLateFee}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Event start date</label>
                    <p>{formatDate(eventObj?.eventStartDate)}</p>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Event end date</label>
                    <p>{formatDate(eventObj?.eventEndDate)}</p>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Late fee start date</label>
                    <p>{formatDate(eventObj?.lateFeeStartDate)}</p>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Registration end date</label>
                    <p>{formatDate(eventObj?.registrationEndDate)}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3">
                        <label className="form-label text-gray-dark" for="userName">Event venue address</label>
                        <p>{eventObj?.eventVenueAddress}</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Event city</label>
                    <p>{eventObj?.eventCity}</p>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Event state</label>
                    <p>{eventObj?.eventState}</p>
                </div>
                <div className="col-md-3">
                    <div className="mb-3">
                        <label className="form-label text-gray-dark" for="userName">Pincode</label>
                        <p>{eventObj?.eventPinCode}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3">
                        <label className="form-label text-gray-dark" for="userName">Organizer name</label>
                        <p>{eventObj?.organizerName}</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Phone number</label>
                    <p>{eventObj?.contactPhoneNumber}</p>
                </div>
                <div className="col-md-3">
                    <label className="form-label text-gray-dark" for="userName">Email</label>
                    <p>{eventObj?.contactEmailId}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <AttachmentTable showDelete={false} attachments={eventObj.fileAttachment} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <label className="form-label text-gray-dark" for="userName">About</label>
                    <p>{eventObj?.about}</p>
                </div>
            </div>
        </>
    )
}