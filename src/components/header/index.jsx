import { useState } from 'react'
import {
    Link
} from 'react-router-dom';
import '../../css/navigation.css'
import logo from '/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context';
import { useLocation } from 'react-router-dom';
import { NAV_ROUTES, NAV_REQUEST_ROUTES, NAV_SUB_ROUTES, NAV_REQUEST_SUB_ROUTES, USER_ROLES, NAV_VIEW_ROUTES } from '../../utils/constants';
function AdminHeaderSection({ isLogin = false }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathDetails = location.pathname?.split('/');
    const { state, setUserData } = useAppContext();
    const { userData } = state;
    const openLoginPage = async () => {
        await sessionStorage.clear();
        await setUserData({});
        setTimeout(() => {
            navigate(NAV_ROUTES.LOGIN);
        }, 100)
    }

    return (
        <>
            <div id="bg" style={{ "width": "100vw" }}>
                <div className="page-wraper">
                    <header className="site-header header-style-6 dark mo-left ">
                        <div className=" sticky-header main-bar-wraper navbar-expand-lg navbar-expand-lg">
                            <div className="main-bar clearfix ">
                                <div className="top-bar">
                                    <div className="container top-bar-crve">
                                        <div className="row justify-content-between">
                                            <div className="dez-topbar-left">
                                                <ul className="social-line text-center pull-right">
                                                    <li><a href="javascript:void(0);"><i className="fa fa-envelope-o"></i> <span> efiindianf@yahoo.co.in</span> </a></li>
                                                    <li><a href="javascript:void(0);"><i className="fa fa-phone"></i> <span> 91 7042472080 </span> </a></li>
                                                    <li className="ic-gap">
                                                        <span><a href="javascript:void(0);" className="fa fa-facebook"></a></span>
                                                        <span><a href="javascript:void(0);" className="fa fa-twitter"></a></span>
                                                        <span><a href="javascript:void(0);" className="fa fa-linkedin"></a></span>
                                                        <span><a href="javascript:void(0);" className="fa fa-google-plus"></a></span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dez-topbar-right ">
                                                <ul className="social-line text-center pull-right">
                                                    {/* {showRegisterLisk &&
                                                        <li><Link to={'/pregegistration'}> <a href="return:javascript(0)">Register Now!</a></Link></li>
                                                    } */}
                                                    {isLogin ? <li></li>
                                                        : <><li><a href="#" onClick={openLoginPage}>Logout</a></li><li><a href="#"><i className="fa fa-user f-18"></i></a></li></>}
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-bar">
                                    <div className="container clearfix">
                                        <div className="logo-header logo-color mostion logo-color">
                                            <Link to={NAV_ROUTES.HOME}>
                                                <img src={logo} style={{ "width": "70px" }} alt="" />
                                            </Link>
                                        </div>
                                        <div style={{
                                            float: 'left',
                                            lineHeight: '80px',
                                            fontSize: '30px',
                                            color: '#ff8242'
                                        }}>
                                            {Object.keys(userData).length > 0 ? userData?.userRole === USER_ROLES.ADMIN ? 'EFI Admin' : 'EFI Secretary General' : 'Admin Portal'}
                                        </div>
                                        {
                                            isLogin ? 
                                                <></> :
                                                <>
                                                    <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </button>
                                                    <div className="extra-nav">
                                                        <div className="extra-cell">
                                                            <button id="quik-search-btn" type="button" className="site-button radius-xl"><i className="fa fa-search"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="dez-quik-search bg-primary-dark">
                                                        <form action="#">
                                                            <input name="search" value="" type="text" className="form-control" placeholder="Type to search" />
                                                            <span id="quik-search-remove"><i className="fa fa-remove"></i></span>
                                                        </form>
                                                    </div>
                                                    <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                                                        <ul className=" nav navbar-nav">
                                                            <li className={pathDetails[2] === NAV_SUB_ROUTES.HOME ? "active" : ''}> <Link to={NAV_ROUTES.HOME}>Home</Link></li>
                                                            <li className={pathDetails[2] === NAV_SUB_ROUTES.EVENT ? "active" : ''}> <a href="javascript:;">Events<i className="fa fa-chevron-down"></i></a>
                                                                <ul className="sub-menu">
                                                                    {/* <li><Link to={NAV_ROUTES.CREATEEVENT}>Create</Link></li>
                                                                    <li><Link to={NAV_ROUTES.DRAFTEVENTSLIST}>Draft</Link></li> */}
                                                                    {userData?.userRole === USER_ROLES.ADMIN && <li><Link to={NAV_ROUTES.REGISTEREDEVENTSLIST}>Registered</Link></li> }
                                                                    {userData?.userRole === USER_ROLES.SEC_ADMIN && <li><Link to={NAV_ROUTES.REVIEWEDVENTSLIST}>Reviewed</Link></li>}
                                                                    <li><Link to={NAV_ROUTES.PUBLISHEDEVENTSLIST}>Published</Link></li>
                                                                    <li><Link to={NAV_ROUTES.COMPLETEDEVENTSLIST}>Completed</Link></li>
                                                                    <li><a href="#">completed tournaments</a></li>
                                                                    <li><a href="#">Registration</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className={pathDetails[2] === NAV_SUB_ROUTES.VIEW ? "active" : ''}> <a href="javascript:;">View<i className="fa fa-chevron-down"></i></a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a  href="javascript:;">Users<i style={{
                                                                            color: '#ff8242',
                                                                            display: 'inline-block',
                                                                            lineHeight: '20px'
                                                                        }} className="fa fa-chevron-right"></i></a>
                                                                        <ul className="sub-menu">
                                                                            <li><Link to={NAV_VIEW_ROUTES.CLUBS}>CLUBS</Link></li>
                                                                            <li><Link to={NAV_VIEW_ROUTES.INSTITUTES}>INSTITUTES</Link></li>
                                                                            <li><Link to={NAV_VIEW_ROUTES.INDIVIDUALS}>INDIVIDUALS</Link></li>
                                                                            <li><Link to={NAV_VIEW_ROUTES.LIFETIMEINDIVIDUALS}>LIFETIME INDIVIDUALS</Link></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><Link to={NAV_VIEW_ROUTES.HORSE}>Horses</Link></li>
                                                                    <li><Link to={NAV_VIEW_ROUTES.RIDER}>Riders</Link></li>
                                                                </ul>
                                                            </li>
                                                            
                                                            <li className={pathDetails[2] === NAV_SUB_ROUTES.REQUEST ? "has-mega-menu active" : 'has-mega-menu'}> <a href="javascript:;">New Requests<i className="fa fa-chevron-down"></i></a>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <a  href="javascript:;">User Requests <i style={{
                                                                color: '#ff8242',
                                                                display: 'inline-block',
                                                                lineHeight: '20px'
                                                            }} className="fa fa-chevron-right"></i></a>
                                                                        <ul className="sub-menu">
                                                                            <li className={pathDetails[3] === NAV_REQUEST_SUB_ROUTES.CLUBS ? "active" : ''}><Link to={NAV_REQUEST_ROUTES.CLUBS}>CLUBS</Link></li>
                                                                            <li className={pathDetails[3] === NAV_REQUEST_SUB_ROUTES.INSTITUTES ? "active" : ''}><Link to={NAV_REQUEST_ROUTES.INSTITUTES}>INSTITUTES</Link></li>
                                                                            <li className={pathDetails[3] === NAV_REQUEST_SUB_ROUTES.INDIVIDUALS ? "active" : ''}><Link to={NAV_REQUEST_ROUTES.INDIVIDUALS}>INDIVIDUALS</Link></li>
                                                                            <li className={pathDetails[3] === NAV_REQUEST_SUB_ROUTES.LIFETIMEINDIVIDUALS ? "active" : ''}><Link to={NAV_REQUEST_ROUTES.LIFETIMEINDIVIDUALS}>LIFETIME INDIVIDUALS</Link></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><Link to={NAV_REQUEST_ROUTES.HORSE}>Horse Request</Link></li>
                                                                    <li><Link to={NAV_REQUEST_ROUTES.RIDER}>Rider Request</Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default AdminHeaderSection
