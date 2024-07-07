import { format } from 'date-fns';
import AttachmentTable from '../../attachmentTable';
import { displayDate } from '../../../services/dateutils';
export default function InstituteMemberDetails({userData}) {
    const cardStyle = {
      padding: '0px'
    }
    return (
      <div class="row">
        <div class="col-md-12">
          <div class="card">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Institute Login Details
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                  <div class="mb-3">
                                      <label class="form-label text-gray-dark" for="userName">User Name</label> 
                                      <p>{userData?.efiUser?.userName}</p>
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
                                <label class="form-label text-gray-dark" for="userName">{userData?.efiUser?.secretQuestion1}</label> 
                                <p>{userData?.efiUser?.secretAnswer1}</p>
                              </div>
                              <div class="col-md-4">
                                <label class="form-label text-gray-dark" for="userName">{userData?.efiUser?.secretQuestion2}</label> 
                                <p>{userData?.efiUser?.secretAnswer2}</p>
                              </div>
                              <div class="col-md-4">
                                <label class="form-label text-gray-dark" for="userName">{userData?.efiUser?.secretQuestion3}</label> 
                                <p>{userData?.efiUser?.secretAnswer3}</p>
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
                              Club Profile
                          </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                              <div class="card-body">
                                  <div class="row">
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Club Name</label>
                                          <p>{userData?.instituteName}</p>
                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Phone Number</label>
                                          <p>{userData?.phoneNumber}</p>
                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Mobile Number</label>
                                          <p>+{userData?.mobileNumber}</p>

                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Email address</label>
                                          <p>{userData?.emailId}</p>
                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Address Lane 1</label>
                                          <p>{userData?.addressLine1}</p>
                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Address Lane 2</label>
                                          <p>{userData?.addressLine2}</p>
                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Address Lane 3</label>
                                          <p>{userData?.addressLine3}</p>
                                      </div>
                                      {/* <div class="col-md-4">
                                                                      <label class="form-label text-gray-dark" for="userName">Address 2</label>
                                                                      <p>{userData?.userName}</p>
                                                                  </div> */}
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">City</label>
                                          <p>{userData?.city}</p>

                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">State</label>
                                          <p>{userData?.state}</p>

                                      </div>
                                      <div class="col-md-4">
                                          <label class="form-label text-gray-dark" for="userName">Pin Code</label>
                                          <p>{userData?.pinCode}</p>

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
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                Institute Equestrian Details
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="card-body">


                                    <div class="card-header ps-0 pb-2"><h6> Equestrian Infrastructure at Facility</h6></div>
                                    <div class="card-body p-0">
                                        <div class="row">
                                            <div class="col-sm-12">

                                                <p>{userData?.equestrianActivities}</p>
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
                                Institute Management
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="card-body">

                                    <div class="card-header ps-0 pb-2"><h5>Club Management (List of office Bearers with following inputs)</h5></div>
                                    <div class="card-body p-0">
                                        {
                                            userData?.clubMembersList?.map(clubMember => (
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
                                        <AttachmentTable showDelete={false} attachments={userData.fileAttachment} />
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
                                            <p>{userData?.underTakingName}</p>

                                        </div>

                                        <div class="col-md-4">
                                            <label class="form-label text-gray-dark" for="userName">Place of Undertaking</label>
                                            <p>{userData?.underTakingPlace}</p>

                                        </div>

                                        <div class="col-md-4">
                                            <label class="form-label text-gray-dark" for="userName">Date of Undertaking</label>
                                            <p> {displayDate(userData?.underTakingDate, "dd-MM-yyyy")}</p>

                                        </div>
                                        {/* <div class="col-md-4">
                                            <label class="form-label text-gray-dark" for="userName">Total + 18%GST</label>
                                            <p>{userData?.subscriptionFees} + {userData?.applicationProcessingFee} = Rs. {userData?.subscriptionFees + userData?.applicationProcessingFee}/-</p>

                                        </div> */}

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
                                Payment
                            </button>
                        </h2>
                        <div id="collapse7" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-md-4">
                                            <label class="form-label text-gray-dark" for="userName">Current Subscription Fee</label>
                                            <p>Rs. {userData?.subscriptionFees}/-</p>

                                        </div>

                                        <div class="col-md-4">
                                            <label class="form-label text-gray-dark" for="userName">Application Processing Fee</label>
                                            <p>Rs. {userData?.applicationProcessingFee}/-</p>

                                        </div>
                                        <div class="col-md-4">
                                            <label class="form-label text-gray-dark" for="userName">One Year Advance Fees</label>
                                            <p>{userData?.oneYearAdvanceFees} /-</p>

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
    );
}