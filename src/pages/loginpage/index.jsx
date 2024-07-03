import { useEffect, useState } from 'react'
import {
    Link,
    Route,
    Routes,
    useNavigate
} from 'react-router-dom';

import { adminLogin } from '../../services/apiService';
import FooterSection from '../../components/footer';
import AdminHeaderSection from '../../components/header';
import { useAppContext } from '../../context';
import { NAV_ROUTES } from '../../utils/constants';
import { toast } from 'react-toastify';
function LoginComponent() {
    const { state, setUserData } = useAppContext();
    const [userName, setUserName] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();

    const validateLoginDetails = () => {
        if (!userName || userName.trim().length == 0) {
            toast.info("Provide user name");
            return false;
        }
        if (!password || password.trim().length == 0) {
            toast.info("Provide password");
            return false;
        }
        return true;
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const loginCheck = async (e) => {
        e.preventDefault();
        if (!validateLoginDetails()) {
            return;
        }
        try {
            const loginDetails = await adminLogin({ userName: userName, password: password });
            if (loginDetails?.userId > 0) {
                sessionStorage.setItem("USER_DETAILS", JSON.stringify(loginDetails));
                setUserData(loginDetails);
                navigate(NAV_ROUTES.HOME);
            }
            else{
                toast.error(loginDetails?.errorMessage);
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    return (
        <>
            <AdminHeaderSection isLogin={true}></AdminHeaderSection>
            <div className="page-content" >
                <div className="section-full bg-white content-inner-1 bg-img-fix overlay-white-dark" style={{ "background-image": "url(./images/bg5.jpg)", "background-position": "center" }}>
                    <div className="container">
                        <div className="section-head" style={{ "margin-top": "100px" }}>
                            <div style={{ "min-height": "49vh" }}>
                                <div className="login-form">
                                    <div className="tab-content">
                                        <div id="login" className="tab-pane active text-center">
                                            <form className="p-a30 dez-form p-b0 m-t100" onSubmit={loginCheck}>
                                                <h3 className="form-title m-t0">Sign In</h3>
                                                <div className="dez-separator-outer m-b5">
                                                    <div className="dez-separator bg-primary style-liner"></div>
                                                </div>
                                                <p>Enter your user name and your password. </p>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="User Name" name="userName"
                                                        value={userName}
                                                        onChange={(e) => setUserName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group search-input">

                                                    <input type="password" className="form-control" placeholder="Password" name="password"
                                                        value={password}
                                                        onChange={(e) => setpassword(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group text-left">

                                                    <div className="m-t20 d-flex justify-content-between">
                                                        <div className="m-b0">
                                                            <input id="check1" type="checkbox" />
                                                            <label for="check1">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <button className="site-button m-r5 mb-3 login-switch">login</button>
                                                </div>
                                            </form>
                                        </div>


                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <FooterSection></FooterSection>
        </>
    )
}

export default LoginComponent