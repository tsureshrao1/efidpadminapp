import { format } from 'date-fns';
import AttachmentTable from '../../attachmentTable';
export default function ClubMemberDetails({userData}) {
  const totalAmount = parseInt((userData.subscriptionFees || 0) + (userData.oneYearAdvanceFees || 0) + (userData.applicationProcessingFee || 0));
  const cardStyle = {
    padding: '0px'
  }
  return (
    <>
        <div class="row">
            <div class="col-md-12">
                <div class="card" style={cardStyle}>

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Club Login Details
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="mb-3">
                                                    <label class="form-label text-gray-dark" for="userName">User Name</label>
                                                    <p>{userData?.efiUsers?.userName}</p>
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
                                                <label class="form-label text-gray-dark" for="userName">{userData?.efiUsers?.secretQuestion1}</label>
                                                <p>{userData?.efiUsers?.secretAnswer1}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">{userData?.efiUsers?.secretQuestion2}</label>
                                                <p>{userData?.efiUsers?.secretAnswer2}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">{userData?.efiUsers?.secretQuestion3}</label>
                                                <p>{userData?.efiUsers?.secretAnswer3}</p>
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
                                                <p>{userData?.clubName}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">Phone Number</label>
                                                <p>{userData?.userName}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">Mobile Number</label>
                                                <p>+{userData?.phoneNumber}</p>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">Email address</label>
                                                <p>{userData?.email}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">Address 1</label>
                                                <p>{userData?.addressLine1}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">Address 2</label>
                                                <p>{userData?.addressLine2}</p>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">Address 3</label>
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
                                        <div class="card-header ps-0 pb-2"><h5>Club Capability</h5></div>
                                        <div class="card-body p-0">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Members</label>
                                                    <p>{userData?.numberOfMembers}</p>

                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Horses</label>
                                                    <p>{userData?.numberOfHorses}</p>

                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Instructors</label>
                                                    <p>{userData?.numberOfInstructors}</p>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="card-header ps-0 pb-2"><h6>List of Instructors</h6></div>
                                        <div class="card-body p-0">
                                            {
                                                userData?.clubInstructorsList?.map(instructor => (
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label class="form-label text-gray-dark" for="userName">Instructor Name</label>
                                                            <p>{instructor?.instructorName}</p>

                                                        </div>
                                                        <div class="col-md-4">
                                                            <label class="form-label text-gray-dark" for="userName">Qualification</label>
                                                            <p>{instructor?.instructorQualification}</p>

                                                        </div>
                                                        <div class="col-md-4">
                                                            <label class="form-label text-gray-dark" for="userName">Additional Details</label>
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

            <div class="col-md-12">
                <div class="card" style={cardStyle}>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Club Equestrian Details
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="card-body">


                                        <div class="card-header ps-0 pb-2"><h6> Equestrian Infrastructure at Facility</h6></div>
                                        <div class="card-body p-0">
                                            <div class="row">
                                              <div class="col-sm-12 input-group">
                                                <div class="form-check mb-2 me-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="ridingArena" name="ridingArena"
                                                        checked={userData.ridingArenaAvailable}
                                                        disabled
                                                    />
                                                    <label class="form-check-label" for="ridingArena">Riding Arena</label>
                                                </div>
                                                <div class="form-check mb-2 me-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="showJumpingFacility" name="showJumpingFacility"
                                                        checked={userData.showJumpingAvailable}
                                                        disabled
                                                    />
                                                    <label class="form-check-label" for="showJumpingFacility">Show Jumping Facility</label>
                                                </div>
                                                <div class="form-check mb-2 me-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="dressageArena" name="dressageArena"
                                                        checked={userData.dressageArenaAvailable}
                                                        disabled
                                                    />
                                                    <label class="form-check-label" for="dressageArena">Dressage Arena</label>
                                                </div>
                                                <div class="form-check mb-2 me-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="crossCountryTrainingFacility" name="crossCountryTrainingFacility"
                                                        checked={userData.xcountryTrainingAvailable}
                                                        disabled
                                                    />
                                                    <label class="form-check-label" for="crossCountryTrainingFacility">X Country Training Facility</label>
                                                </div>
                                                <div class="form-check mb-2 me-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="tentPeggingTrainingFacility" name="tentPeggingTrainingFacility"
                                                        checked={userData.tentPeggingTrainingAvailable}
                                                        disabled
                                                    />
                                                    <label class="form-check-label" for="tentPeggingTrainingFacility">Tent Pegging Training facility</label>
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
            </div>
            <div class="col-md-12">
                <div class="card" style={cardStyle}>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    Club Management
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
                                <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    Sponsor List
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="card-body">

                                        <div class="card-header ps-0 pb-2"><h5>SponsorsList (provide ability to add Sponsors with following details (minimum 2))</h5></div>
                                        <div class="card-body p-0">
                                            {
                                                userData?.memberSponsorsList?.map(sponsor => (
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
            {/* <div class="col-md-12">
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
                                                                        <div class="col-md-4">
                                                                            <label class="form-label text-gray-dark" for="userName">Upload Documents</label>
                                                                            <p>Registration Certificate</p>

                                                                        </div>

                                                                        <div class="col-md-4">

                                                                            <p class="mt-lbl">RegistrationCertificate.pdf </p>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                              <a href=""> <img src="../images/pdf.png" alt="" class="mt-4" Style="width:30px"></a>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div> */}
            {/* <div class="col-md-12">
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
                                                                            <label class="form-label text-gray-dark" for="userName">Place of Undertaking</label>
                                                                            <p>Hyderabad</p>

                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <label class="form-label text-gray-dark" for="userName">Date of Undertaking</label>
                                                                            <p>25-05-2020</p>

                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <label class="form-label text-gray-dark" for="userName">Signature Upload</label>
                                                                              <p><img src="../images/signature.png" alt="" class="mt-4" Style="height:50px"></p>

                                                                        </div>


                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

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
                                                <label class="form-label text-gray-dark" for="userName">One year advance fee</label>
                                                <p> Rs. {userData?.oneYearAdvanceFees}/-</p>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label text-gray-dark" for="userName">Application Processing Fee</label>
                                                <p>Rs. {userData?.applicationProcessingFee}/-</p>

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
    </>
  );
}