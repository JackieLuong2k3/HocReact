import { useState } from "react";
import SideBarAdmin from "../admin/Sidebar";
import "../admin/Sidebar.scss";
import { FaHeart, FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom'
import "../admin/Admin.scss"
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggleSidebar = () => {
        setToggle(!toggle);
    }

    return (
        <div className="sidebar-admin">
            <SideBarAdmin collapsed={toggle} />
            <div className="container-content">
                <div className="btn-toggle" >
                    <FaBars onClick={handleToggleSidebar} />
                </div>
                <div className="content-manager" >
                    <Outlet></Outlet>
                </div>
            </div>
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
        </div>

    )
}
export default Admin;