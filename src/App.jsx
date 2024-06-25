import './App.css';
import LoginComponent from "./pages/loginpage";
import RequestsList from "./pages/requestslist";
import GridExample from './pages/home';
import EventDetails from './pages/events/eventDetails';
import EventsList from './pages/events/eventsList';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { NAV_ROUTES, NAV_MODULE_NAME } from './utils/constants';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={sessionStorage.getItem("USER_DETAILS") ? <Navigate to={NAV_ROUTES.HOME} /> : <LoginComponent />} path={NAV_MODULE_NAME}>
          </Route>
          <Route element={sessionStorage.getItem("USER_DETAILS") ? <Navigate to={NAV_ROUTES.HOME} /> : <LoginComponent />} path={NAV_ROUTES.LOGIN}>
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<GridExample />} path={NAV_ROUTES.HOME} />
            <Route element={<RequestsList />} path={NAV_ROUTES.REQUEST} />
            <Route element={<EventDetails />} path={NAV_ROUTES.CREATEEVENT} />
            <Route element={<EventsList eventsStatus="draft" />} path={NAV_ROUTES.DRAFTEVENTSLIST} />
            <Route element={<EventsList eventsStatus="published" />} path={NAV_ROUTES.PUBLISHEDEVENTSLIST} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
      />
    </>
  )
}

export default App
