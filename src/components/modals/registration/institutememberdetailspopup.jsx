import { format } from 'date-fns';
import AttachmentTable from '../../attachmentTable';
import { displayDate } from '../../../services/dateutils';
import MemberPayment from '../../payment/memberPayments';
import { Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export default function InstituteMemberDetails({memberData, setData}) {
    const cardStyle = {
      padding: '0px'
    }
    const { requestType } = useParams();
    const isRequests = requestType ? true : false;
    return (
      <div class="row">
        <div class="col-md-12">
          <div class="card" style={cardStyle}>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Institution Login Details
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
                          Institution Profile
                          </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                              <div class="card-body">
                                  <div class="row">
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Institution Name</label>
                                          <p>{memberData?.instituteName}</p>
                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Phone Number</label>
                                          <p>{memberData?.phoneNumber}</p>
                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Mobile Number</label>
                                          <p>{memberData?.mobileNumber}</p>

                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Contact Name</label>
                                          <p>{memberData?.contactName}</p>
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
                                      {/* <div class="col-md-4">
                                                                      <label class="form-label text-gray-dark" for="userName">Address 2</label>
                                                                      <p>{memberData?.userName}</p>
                                                                  </div> */}
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


                                    <div class="card-header ps-0 pb-2"><h6> Equestrian Infrastructure at Facility</h6></div>
                                    <div class="card-body p-0">
                                        <div class="row">
                                            <div class="col-sm-12">

                                                <p>{memberData?.equestrianActivitiesDetail}</p>
                                            </div>

                                        </div>
                                    </div>

                                    {/* <div class="card-header ps-0 pb-2"><h6> Equestrian Activities</h6></div>
                                                                <div class="card-body p-0">
                                                                    <div class="row">

                                                                        <div class="col-md-12">

                                                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

                                                                        </div>


                                                                    </div>
                                                                </div> */}

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
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                Institution Management
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="card-body">

                                    <div class="card-header ps-0 pb-2"><h5>Club Management (List of office Bearers with following inputs)</h5></div>
                                    <div class="card-body p-0">
                                        {
                                            memberData?.clubMembersList?.map(clubMember => (
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label class="form-label text-gray-dark" for="userName">Ful Name</label>
                                                        <p>{clubMember?.clubMemberName}</p>

                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="form-label text-gray-dark" for="userName">Designation</label>
                                                        <p>{clubMember?.clubMemberDesignation}</p>

                                                    </div>
                                                    <div class="col-md-3">
                                                        <label class="form-label text-gray-dark" for="userName">Phone Number</label>
                                                        <p>{clubMember?.clubMemberPhoneNumber}</p>

                                                    </div>

                                                    <div class="col-md-3">
                                                        <label class="form-label text-gray-dark" for="userName">Email Address</label>
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
                            <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                Undertaking & Submission Confirmation
                            </button>
                        </h2>
                        <div id="collapse7" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                                            <p> {displayDate(memberData?.underTakingDate, "dd-MM-yyyy")}</p>

                                        </div>
                                        {/* <div class="col-md-4">
                                            <label class="form-label text-gray-dark" for="userName">Total + 18%GST</label>
                                            <p>{memberData?.subscriptionFees} + {memberData?.applicationProcessingFee} = Rs. {memberData?.subscriptionFees + memberData?.applicationProcessingFee}/-</p>

                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {memberData?.efiUser?.userId && <MemberPayment id={memberData?.efiUser?.userId} type='INST' /> }
      </div>
    );
}