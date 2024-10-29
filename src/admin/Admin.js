import { useState } from "react";
import SideBarAdmin from "../admin/Sidebar";
import "../admin/Sidebar.scss";
import { FaHeart, FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom'


const Admin =() =>{
    const [toggle, setToggle] = useState(true);
    const handleToggleSidebar =()=>{
        setToggle(!toggle);
    }

    return(
        <div className="sidebar-admin">
            <SideBarAdmin collapsed={toggle}/>
            <div>
            <div className="btn-toggle" >                
            <FaBars onClick={handleToggleSidebar} />
            </div>
            <div className="content-manager" >
                <Outlet></Outlet>
            </div>
            </div>
        </div>
        
    )
}
export default Admin;