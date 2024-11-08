import ModalCreateUser from "./ModalCreateUser"
import TableUser from '../content/TableUser'
import ModalUpdateUser from "./ModalUpdateUser"
import { getAllUser } from '../../service/apiService';
import { useEffect, useState } from "react"
const ManageUser = () => {
  const [showModalUpdate,setShowModelUpdate]=useState(false)
  const [dataUpdate,setDataUpdate]=useState({})
  const [listusers, setListUsers] = useState([]);

  useEffect(() => {
      fetchAllUser()
  }, [])
  const fetchAllUser = async () => {
      let res = await getAllUser()
      setListUsers(res.DT)
  }

 
  const handleBtnUpdate=(user)=>{
    setShowModelUpdate(true)
    setDataUpdate(user)
    console.log(user)
  }
  return (
    <div>
      <ModalCreateUser
      fetchAllUser={fetchAllUser}/>
      <div className="table-user">
        <TableUser
        handleBtnUpdate={handleBtnUpdate}
        listusers={listusers}
        />
      </div>
      <ModalUpdateUser
      show={showModalUpdate}
      setShow={setShowModelUpdate}
      dataUpdate={dataUpdate}
      />
    </div>
  )
}
export default ManageUser