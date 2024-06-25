import { Outlet, Navigate } from 'react-router-dom';
import { useAppContext } from '../context';
import { NAV_ROUTES } from '../utils/constants';
import MainLayout from '../layout/layout';
const ProtectedRoutes = () => {
    const { state } = useAppContext();
    const { userData } = state;
    return userData ? <MainLayout><Outlet /></MainLayout> : <Navigate to={NAV_ROUTES.LOGIN} />;
}

export default ProtectedRoutes;