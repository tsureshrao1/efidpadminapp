import { Col, Form } from 'react-bootstrap';
import { displayDate } from '../../../services/dateutils';
import AttachmentTable from '../../attachmentTable';
import MemberPayment from '../../payment/memberPayments';
import { useParams } from 'react-router-dom';
export default function LifeTimeIndividualDetails({memberData, setData}) {
    const cardStyle = {
        padding: '0px'
    }
    const { requestType } = useParams();
    const isRequests = requestType ? true : false;
    return (
        <>

            <div class="row">
                <div class="col-md-12">
                    <div class="card" style={cardStyle}>

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Life Member Login Details
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="mb-3">
                                                        <label class="form-label text-gray-dark" for="userName">User Name</label>
                                                        <p>{memberData?.efiUser?.userName}</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Password</label>
                                                    <p>XXXXXXXXX</p>
                                                </div>


                                            </div>
                                            <div class="row">
                                                <h6>Secret Q/A</h6>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">{memberData?.efiUser?.secretQuestion1}</label>
                                                    <p>{memberData?.efiUser?.secretAnswer1}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">{memberData?.efiUser?.secretQuestion2}</label>
                                                    <p>{memberData?.efiUser?.secretAnswer2}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">{memberData?.efiUser?.secretQuestion3}</label>
                                                    <p>{memberData?.efiUser?.secretAnswer3}</p>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card" style={cardStyle}>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Life Member Profile
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Full Name</label>
                                                    <p>{memberData?.lifeTimeIndividualName}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Date Of Birth</label>
                                                    <p>{displayDate(memberData?.dateOfBirth, 'yyyy-MM-dd')}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Parent Name</label>
                                                    <p>{memberData?.fatherName}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Occupation</label>
                                                    <p>{memberData?.occupation}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Gender</label>
                                                    <p>{memberData?.gender}</p>
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Mobile Number </label>
                                                    <p>{memberData?.mobileNumber}</p>
                                                </div>
                                                
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Phone Number</label>
                                                    <p>{memberData?.phoneNumber}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Email address</label>
                                                    <p>{memberData?.emailId}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Address Lane 1</label>
                                                    <p>{memberData?.addressLine1}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Address Lane 2</label>
                                                    <p>{memberData?.addressLine2}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Address Lane 3</label>
                                                    <p>{memberData?.addressLine3}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">City</label>
                                                    <p>{memberData?.city}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">State</label>
                                                    <p>{memberData?.state}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Pin Code</label>
                                                    <p>{memberData?.pinCode}</p>
                                                </div>
                                                {
                                                    isRequests ? (
                                                        <Form.Group as={Col} md="4" controlId={`validationCustom017`}>
                                                            <Form.Label>EFI Member Number</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder="EFI Member Number"
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
                                                                EFI Member Number required.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    ) : (
                                                        <div class="col-md-4">
                                                            <label class="form-label text-gray-dark" for="userName">EFI Member Number</label>
                                                            <p>{memberData?.efiMemberNumber}</p>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card" style={cardStyle}>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                        Equestrian Details
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="card-body">
                                            <div class="card-header ps-0 pb-2"><h6> Equestrian Activities</h6></div>
                                            <div class="card-body p-0">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="form-label text-gray-dark" for="userName">Own Horses</label>
                                                        <p>{memberData?.ownHorses}</p>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label text-gray-dark" for="userName">Stabled Place</label>
                                                        <p>{memberData?.stabledPlace}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label class="form-label text-gray-dark" for="userName">Is Active Ride</label>
                                                        <p>{memberData?.isActiveRider ? "Yes" : "No"}</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="form-label text-gray-dark" for="userName">Interest In Judging</label>
                                                        <p>{memberData?.interestInJudging ? "Yes" : "No"}</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="form-label text-gray-dark" for="userName">Interest In Training</label>
                                                        <p>{memberData?.interestInTraining ? "Yes" : "No"}</p>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="form-label text-gray-dark" for="userName">Interest In Course Designing</label>
                                                        <p>{memberData?.interestInCourseDesigning ? "Yes" : "No"}</p>
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
                <div class="col-md-12">
                    <div class="card" style={cardStyle}>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                        Sponsor List
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="card-body">
                                            <div class="card-header ps-0 pb-2"><h5>SponsorsList</h5></div>
                                            <div class="card-body p-0">
                                                {
                                                    memberData?.memberSponsorsList?.map(sponsor => (
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <label class="form-label text-gray-dark" for="userName">Sponsor Full Name</label>
                                                                <p>{sponsor?.memberSponsorName}</p>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label class="form-label text-gray-dark" for="userName">Sponsor EFI LM Number</label>
                                                                <p>{sponsor?.efiLifeTimeNumber}</p>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label class="form-label text-gray-dark" for="userName">Phone Number</label>
                                                                <p>{sponsor?.memberSponsorContactNumber}</p>
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
                <div class="col-md-12">
                    <div class="card" style={cardStyle}>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        Attach Documents
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="card-body">
                                            <div class="row">
                                                <AttachmentTable showDelete={false} attachments={memberData.fileAttachment} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card" style={cardStyle}>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        Undertaking & Submission Confirmation
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Name of Undertaking</label>
                                                    <p>{memberData?.underTakingName}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Place of Undertaking</label>
                                                    <p>{memberData?.underTakingPlace}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Date of Undertaking</label>
                                                    <p>{displayDate(memberData?.underTakingDate, 'yyyy-MM-dd')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {memberData?.efiUser?.userId && <MemberPayment id={memberData?.efiUser?.userId} type='LIFE' /> }
            </div>

        </>
    );
}