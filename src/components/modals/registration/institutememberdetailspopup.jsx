import { format } from 'date-fns';
import AttachmentTable from '../../attachmentTable';
export default function InstituteMemberDetails({userData}) {
    const totalAmount = parseInt((userData.subscriptionFees || 0) + (userData.oneYearAdvanceFees || 0) + (userData.applicationProcessingFee || 0));
    const totalAmountWithGST = totalAmount + ((totalAmount*18)/100);
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
          <div class="card">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Institute Profile
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                  <label class="form-label text-gray-dark" for="userName">Institute Name</label> 
                                  <p>{userData.instituteName}</p>
                                </div>
                                <div class="col-md-4">
                                  <label class="form-label text-gray-dark" for="userName">Phone Number</label> 
                                  <p>{userData.phoneNumber}</p>
                                </div>
                                <div class="col-md-4">
                                  <label class="form-label text-gray-dark" for="userName">Mobile Number</label> 
                                  <p>{userData.mobileNumber}</p>
                                </div>
                                <div class="col-md-4">
                                  <label class="form-label text-gray-dark" for="userName">Email address</label> 
                                  <p>{userData?.emailId}</p>
                                </div>
                                <div class="col-md-4">
                                  <label class="form-label text-gray-dark" for="userName">Address 1</label> 
                                  <p>{userData?.addressLine1}</p>
                                </div>
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
          <div class="card">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        Institute Management
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <div class="card-body">
                            {userData.clubMembersList.map((obj, index) => (
                                <div class="row" key={index}>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label text-gray-dark" for="">Full Name</label>
                                            <p>{obj.instituteMemberName}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label text-gray-dark" for="">Designation</label>
                                            <p>{obj.insitituteMemberDesignation}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4"><div class="mb-3">
                                        <label class="form-label text-gray-dark" for="phNumber">Phone Number</label>
                                        <p>{obj.insitituteMemberPhoneNumber}</p>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label text-gray-dark" for="clubMemberEmailId">Email address</label>
                                            <p>{obj.insitituteMemberEmailId}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {
                                userData.clubMembersList.length < 1 && (
                                    <div class="row">
                                        <div class="col-md-12">
                                            No members available
                                        </div>
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
        <div class="col-md-12">
          <div class="card">
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
                                <div class="row">
                                  <div class="col-md-12">
                                        <p>{userData.equestrianActivitiesDetail}</p>
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
          <div class="card">
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
          <div class="card">
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
                                  <label class="form-label text-gray-dark" for="userName">Place of Undertaking</label> 
                                  <p>{userData.underTakingPlace}</p>
                                </div>
                                <div class="col-md-4">
                                  <label class="form-label text-gray-dark" for="userName">Date of Undertaking</label> 
                                  <p>{userData.underTakingDate}</p>
                                </div>
                                <div class="col-md-4">
                                  <label class="form-label text-gray-dark" for="userName">Signature Upload</label> 
                                  <p><img src="../images/signature.png" alt="" class="mt-4" Style="height:50px" /></p>
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
          <div class="card">
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
                                        <p>{userData.subscriptionFees}</p>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label text-gray-dark" for="userName">One Year Advance</label> 
                                        <p>{userData.oneYearAdvanceFees}</p>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label text-gray-dark" for="userName">Application Processing Fee</label> 
                                        <p>{userData.applicationProcessingFee}</p>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label text-gray-dark" for="userName">Total with 18% GST</label> 
                                        <p>{totalAmountWithGST}</p>
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