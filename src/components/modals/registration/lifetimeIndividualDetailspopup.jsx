import { format } from 'date-fns';
import AttachmentTable from '../../attachmentTable';
export default function LifeTimeIndividualDetails({userData}) {
    const totalAmount = parseInt((userData.subscriptionFees || 0) + (userData.applicationProcessingFee || 0));
    const totalAmountWithGST = totalAmount + ((totalAmount*18)/100);
    const cardStyle = {
        padding: '0px'
    }
    return (
        <>

            <div class="row">
                <div class="col-md-12">
                    <div class="row mb-3">
                        <div class="col-md-8"><h2 class="h6 text-uppercase"> Confirm Details!</h2></div>

                    </div>
                    <div class="card" style={cardStyle}>

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
                                                    <p>{userData?.efiUser?.answer1}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">{userData?.efiUser?.secretQuestion2}</label>
                                                    <p>{userData?.efiUser?.answer2}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">{userData?.efiUser?.secretQuestion3}</label>
                                                    <p>{userData?.efiUser?.answer3}</p>
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
                                        Individual Profile
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Full Name</label>
                                                    <p>{userData?.lifeTimeIndividualName}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Date Of Birth</label>
                                                    <p>{userData?.dateOfBirth ? format(userData?.dateOfBirth, 'yyyy-MM-dd') : ''}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Gender</label>
                                                    <p>{userData?.gender}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Father Name</label>
                                                    <p>{userData?.fatherName}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Occupation</label>
                                                    <p>{userData?.occupation}</p>
                                                </div>

                                              
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Email address</label>
                                                    <p>{userData?.emailId}</p>
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Address 1</label>
                                                    <p>{userData?.addressLine1}</p>
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

                                            <div class="card-header ps-0 pb-2"><h6> Equestrian Activities</h6></div>
                                            <div class="card-body p-0">
                                                <div class="row">

                                                    <div class="col-md-12">

                                                        <p></p>

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
                                                    <p>{userData?.underTakingName}</p>

                                                </div>

                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Place of Undertaking</label>
                                                    <p>{userData?.underTakingPlace}</p>

                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label text-gray-dark" for="userName">Date of Undertaking</label>
                                                    <p>{userData?.underTakingDate ? format(userData?.underTakingDate, 'yyyy-MM-dd') : ''}</p>

                                                </div>
                                                {/* <div class="col-md-4">
                                                                                <label class="form-label text-gray-dark" for="userName">Signature Upload</label>
                                                                                 <p><img src="../images/signature.png" alt="" class="mt-4" Style="height:50px"></p>

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
                                                    <label class="form-label text-gray-dark" for="userName">Total + 18%GST</label>
                                                    <p>{totalAmountWithGST}/-</p>

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