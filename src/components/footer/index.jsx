import { useState } from 'react'

function FooterSection() {
    return (
        <>
            <footer className="site-footer footer-overlay bg-img-fix footer-skew" style={{
                backgroundImage: 'url(./images/bg5.jpg)',
                backgroundPosition: 'center bottom',
                backgroundSize: 'cover',
                display: 'block'
            }}>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 text-left"> <span>© Copyright 2024</span> </div>
                            <div className="col-lg-4 text-center"> <span> All rights reserved. Equestrian Federation of India</span> </div>
                            <div className="col-lg-4 text-right "> <a href="about-2.html"> About</a> <a href="help.html"> Help Desk</a> <a href="privacy-policy.html"> Privacy Policy</a> </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterSection