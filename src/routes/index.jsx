import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context';
import MainLayout from '../layout/layout';
import { USER_ROLES } from '../utils/constants';
const ProtectedRoutes = () => {
    const { state } = useAppContext();
    const navigate = useNavigate()
    const { userData } = state;
    if(userData.userRole !== USER_ROLES.ADMIN && userData.userRole !== USER_ROLES.SEC_ADMIN) {
        navigate('/efidpadmin');
    }
    return (userData && Object.keys(userData).length) ? <MainLayout><Outlet /></MainLayout> : <Navigate to={'/efidpadmin'} />;
}

export default ProtectedRoutes;