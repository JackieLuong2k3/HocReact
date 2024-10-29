import { useState } from "react";
import SideBarAdmin from "../admin/Sidebar";
import "../admin/Sidebar.scss";
import { FaHeart, FaBars } from 'react-icons/fa';


const Admin =() =>{
    const [toggle, setToggle] = useState(true);
    const handleToggleSidebar =()=>{
        setToggle(!toggle);
    }

    return(
        <div className="sidebar-admin">
            <SideBarAdmin collapsed={toggle}/>
            <div className="btn-toggle" onClick={handleToggleSidebar}>
            <FaBars />
            </div>
        </div>
        
    )
}
export default Admin;