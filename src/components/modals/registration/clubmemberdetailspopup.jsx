import { format } from 'date-fns';
import AttachmentTable from '../../attachmentTable';
import MemberPayment from '../../payment/memberPayments';
import DataLabelValue from '../../DataLabelValue';
import { Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export default function ClubMemberDetails({memberData, setData}) {
    const { requestType } = useParams();
    const isRequests = requestType ? true : false;
  const cardStyle = {
    padding: '0px'
  }
  return (
    <>
        <div className="row">
            <div className="col-md-12">
                <div className="card" style={cardStyle}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Club Login Details
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label className="form-label text-gray-dark" for="userName">User Name</label>
                                                    <p>{memberData?.efiUsers?.userName}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Password</label>
                                                <p>XXXXXXXXX</p>
                                            </div>


                                        </div>
                                        <div className="row">
                                            <h6>Secret Q/A</h6>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">{memberData?.efiUsers?.secretQuestion1}</label>
                                                <p>{memberData?.efiUsers?.secretAnswer1}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">{memberData?.efiUsers?.secretQuestion2}</label>
                                                <p>{memberData?.efiUsers?.secretAnswer2}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">{memberData?.efiUsers?.secretQuestion3}</label>
                                                <p>{memberData?.efiUsers?.secretAnswer3}</p>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="card" style={cardStyle}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Club Profile
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Club Name</label>
                                                <p>{memberData?.clubName}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Phone Number</label>
                                                <p>{memberData?.phoneNumber}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Mobile Number</label>
                                                <p>{memberData?.mobileNumber}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Contact Name</label>
                                                <p>{memberData?.contactName}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Email address</label>
                                                <p>{memberData?.emailId}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Address Line 1</label>
                                                <p>{memberData?.addressLine1}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Address Line 2</label>
                                                <p>{memberData?.addressLine2}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Address Line 3</label>
                                                <p>{memberData?.addressLine3}</p>
                                            </div>
                                            {/* <div className="col-md-4">
                                                                            <label className="form-label text-gray-dark" for="userName">Address 2</label>
                                                                            <p>{memberData?.userName}</p>
                                                                        </div> */}
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">City</label>
                                                <p>{memberData?.city}</p>

                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">State</label>
                                                <p>{memberData?.state}</p>

                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label text-gray-dark" for="userName">Pin Code</label>
                                                <p>{memberData?.pinCode}</p>
                                            </div>
                                            { isRequests ? (<Form.Group as={Col} md="4" controlId={`validationCustom017`}>
                                                <Form.Label>EFI Member Number</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="EFI Number"
                                                    value={memberData.efiMemberNumber}
                                                    onChange={(e) => {
                                                        setData({
                                                            ...memberData,
                                                            efiMemberNumber: e.target.value
                                                        })
                                                    }}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    EFI required.
                                                </Form.Control.Feedback>
                                            </Form.Group>) : (
                                                <div className="col-md-4">
                                                    <label className="form-label text-gray-dark" for="userName">EFI Member Number</label>
                                                    <p>{memberData?.efiMemberNumber}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-header ps-0 pb-2"><h5>Club Capability</h5></div>
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label className="form-label text-gray-dark" for="userName">Members</label>
                                                    <p>{memberData?.numberOfMembers}</p>

                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label text-gray-dark" for="userName">Horses</label>
                                                    <p>{memberData?.numberOfHorses}</p>

                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label text-gray-dark" for="userName">Instructors</label>
                                                    <p>{memberData?.numberOfInstructors}</p>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-header ps-0 pb-2"><h6>List of Instructors</h6></div>
                                        <div className="card-body p-0">
                                            {
                                                memberData?.clubInstructorsList?.map(instructor => (
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label className="form-label text-gray-dark" for="userName">Instructor Name</label>
                                                            <p>{instructor?.instructorName}</p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label text-gray-dark" for="userName">Qualification</label>
                                                            <p>{instructor?.instructorQualification}</p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label text-gray-dark" for="userName">Additional Details</label>
                                                            <p>{instructor?.additionalDetails}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-md-12">
                <div className="card" style={cardStyle}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Club Equestrian Details
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body">
                                        <div className="card-header ps-0 pb-2"><h6> Equestrian Infrastructure at Facility</h6></div>
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-xs=12 col-sm-6 col-lg-4" >
                                                    <DataLabelValue
                                                        label={"Riding Arena"}
                                                        value={memberData?.ridingArenaAvailable ? "Yes" : "No"}
                                                    />
                                                </div>
                                                <div className="col-xs=12 col-sm-6 col-lg-4" >
                                                    <DataLabelValue
                                                        label={"Show Jumping Facility"}
                                                        value={memberData?.showJumpingAvailable ? "Yes" : "No"}
                                                    />
                                                </div>
                                                <div className="col-xs=12 col-sm-6 col-lg-4" >
                                                    <DataLabelValue
                                                        label={"Dressage Arena"}
                                                        value={memberData?.dressageArenaAvailable ? "Yes" : "No"}
                                                    />
                                                </div>
                                                <div className="col-xs=12 col-sm-6 col-lg-4" >
                                                    <DataLabelValue
                                                        label={"X Country Training Facility"}
                                                        value={memberData?.xcountryTrainingAvailable ? "Yes" : "No"}
                                                    />
                                                </div>
                                                <div className="col-xs=12 col-sm-6 col-lg-4" >
                                                    <DataLabelValue
                                                        label={"Tent Pegging Training facility"}
                                                        value={memberData?.tentPeggingTrainingAvailable ? "Yes" : "No"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-header ps-0 pb-2"><h6> Equestrian Activities</h6></div>
                                        <div className="card-body p-0">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>{memberData?.equestrianActivitiesDetail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="card" style={cardStyle}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    Club Management
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body">

                                        <div className="card-header ps-0 pb-2"><h5>Club Management (List of office Bearers with following inputs)</h5></div>
                                        <div className="card-body p-0">
                                            {
                                                memberData?.clubMembersList?.map((clubMember, index) => (
                                                    <div key={index} className="row">
                                                        <div className="col-md-3">
                                                            <label className="form-label text-gray-dark" for="userName">Ful Name</label>
                                                            <p>{clubMember?.clubMemberName}</p>

                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label text-gray-dark" for="userName">Designation</label>
                                                            <p>{clubMember?.clubMemberDesignation}</p>

                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label text-gray-dark" for="userName">Phone Number</label>
                                                            <p>{clubMember?.clubMemberPhoneNumber}</p>

                                                        </div>

                                                        <div className="col-md-3">
                                                            <label className="form-label text-gray-dark" for="userName">Email Address</label>
                                                            <p>{clubMember?.clubMemberEmailId}</p>

                                                        </div>


                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="card" style={cardStyle}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    Sponsor List
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body">
                                        <div className="card-header ps-0 pb-2"><h5>SponsorsList (provide ability to add Sponsors with following details (minimum 2))</h5></div>
                                        <div className="card-body p-0">
                                            {
                                                memberData?.memberSponsorsList?.map((sponsor, index) => (
                                                    <div key={index} className="row">
                                                        <div className="col-md-4">
                                                            <label className="form-label text-gray-dark" for="userName">Sponsor Full Name</label>
                                                            <p>{sponsor?.memberSponsorName}</p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label text-gray-dark" for="userName">Sponsor EFI LM Number</label>
                                                            <p>{sponsor?.efiLifeTimeNumber}</p>

                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label text-gray-dark" for="userName">Phone Number</label>
                                                            <p>{sponsor?.memberSponsorContactNumber}</p>

                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-md-12">
                <div className="card" style={cardStyle}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Attach Documents
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">

                                    <div className="card-body">
                                        <div className="row">
                                            <AttachmentTable showDelete={false} attachments={memberData.fileAttachment} />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {memberData?.efiUsers?.userId && <MemberPayment id={memberData?.efiUsers?.userId} type='CLUB' /> }
        </div>
    </>
  );
}