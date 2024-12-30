import { Route, Routes } from 'react-router-dom'
import App from './App';
import User from './components/users/User';
import Admin from './components/admin/Admin'
import Home from './components/home/Home';
import Dashboard from './components/admin/content/Dashboard'
import ManageUser from './components/admin/content/ManageUser'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ListQuiz from './components/users/ListQuiz';
const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<Home />}></Route>
                    <Route path='user' element={<ListQuiz />} />
                </Route>
                <Route path='admin' element={<Admin />} >
                    <Route index element={<Dashboard />}></Route>
                    <Route path='manage-user' element={<ManageUser />} />
                    <Route path='dashboard' element={<Dashboard />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
/>
            <ToastContainer />
        </>
    )
}
export default Layout