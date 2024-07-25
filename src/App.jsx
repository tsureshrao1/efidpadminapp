import './App.css';
import LoginComponent from "./pages/loginpage";
import MemberRequest from './pages/requestslist/member';
import GridExample from './pages/home';
import EventDetails from './pages/events/eventDetails';
import EventsList from './pages/events/eventsList';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { NAV_ROUTES, NAV_MODULE_NAME } from './utils/constants';
import EventsRequests from './pages/events/eventsRequests';
import EventHandler from './pages/events/eventHandler';
import HorseRequests from './pages/requestslist/horse';
import RiderRequests from './pages/requestslist/rider';
import SideCanvas from './components/canvas';
import Popup from './components/modals/registration/quickview';
import { useAppContext } from './context';
function App() {
  const { state } = useAppContext();
  const { userData } = state;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={userData && Object.keys(userData).length > 0 ? <Navigate to={NAV_ROUTES.HOME} /> : <LoginComponent />} path={NAV_MODULE_NAME}>
          </Route>
          <Route element={userData && Object.keys(userData).length > 0 ? <Navigate to={NAV_ROUTES.HOME} /> : <LoginComponent />} path={NAV_ROUTES.LOGIN}>
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<GridExample />} path={NAV_ROUTES.HOME} />
            <Route element={<HorseRequests />} path={NAV_ROUTES.HORSE_REQUEST} />
            <Route element={<RiderRequests />} path={NAV_ROUTES.RIDER_REQUEST} />
            <Route element={<MemberRequest />} path={NAV_ROUTES.REQUEST} />
            <Route element={<MemberRequest />} path={NAV_ROUTES.VIEW} />
            <Route element={<EventDetails />} path={NAV_ROUTES.CREATEEVENT} />
            <Route element={<EventsList eventsStatus="DRAFT" />} path={NAV_ROUTES.DRAFTEVENTSLIST} />
            <Route element={<EventsList eventsStatus="REGISTER" />} path={NAV_ROUTES.REGISTEREDEVENTSLIST} />
            <Route element={<EventsList eventsStatus="REVIEWED" />} path={NAV_ROUTES.REVIEWEDVENTSLIST} />
            <Route element={<EventsList eventsStatus="PUBLISHED" />} path={NAV_ROUTES.PUBLISHEDEVENTSLIST} />
            <Route element={<EventsList eventsStatus="COMPLETED" />} path={NAV_ROUTES.COMPLETEDEVENTSLIST} />
            <Route element={<EventsRequests />} path={NAV_ROUTES.REQUESTEVENTS} />
            <Route element={<EventHandler />} path={NAV_ROUTES.EVENT_DETAILS} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
      />
      <SideCanvas />
      <Popup />
    </>
  )
}

export default App
