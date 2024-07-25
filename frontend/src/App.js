import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogiIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleJob from './pages/SingleJob';
import UserDashboard from './pages/user/userDashboard';
import UserRoute from './component/UserRoutes';
import Register from './pages/Register';
import Layout from './pages/global/Layout';
import { ProSidebarProvider } from 'react-pro-sidebar';
import UserJobsHistory from './pages/user/userJobsHistory';
import DashJobs from './pages/admin/DashJobs'
import DashCreateJob from './pages/admin/DashCreateJobs';
import DashEditJob from './pages/admin/DashEditJobs';
import AdminRoute from './component/AdminRoutes';

const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const DashJobsHOC = Layout(DashJobs);
const DashCreateJobHOC = Layout(DashCreateJob)
const DashAdminEditJobHOC = Layout(DashEditJob);

const App = () => {

    return (
        <>
        <ToastContainer/>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<LogiIn />} />
                        <Route path='/logout' element={<LogiIn />} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                        <Route path='/admin/jobs' element={<UserRoute>< DashJobsHOC /></UserRoute>} />
                        <Route path='/admin/job/create' element={<AdminRoute><DashCreateJobHOC /></AdminRoute>} />
                       <Route path='/admin/edit/job/:id' element={<AdminRoute><DashAdminEditJobHOC /></AdminRoute>} />
                        <Route path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
                        <Route path='/search/location/:location' element={<Home />} />
                        <Route path='/job/:id' element={<SingleJob />} />
                        <Route path='/search/:keyword' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default App