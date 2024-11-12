import ModalCreateUser from "./ModalCreateUser"
import TableUser from '../content/TableUser'
import ModalUpdateUser from "./ModalUpdateUser"
import { getAllUser } from '../../service/apiService';
import { useEffect, useState } from "react"
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = () => {
  const [showModalUpdate,setShowModelUpdate]=useState(false)
  const [showModalDelete,setShowModalDelete]=useState(false)

  const [dataUpdate,setDataUpdate]=useState({})
  const [dataDelete,setDataDelete]=useState({})
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
  }
  const handleBtnDelete=(user)=>{
    console.log(user)
    
  }
  const resetDataUpdate=()=>{
    setDataUpdate({})
  }
  return (
    <div>
      <ModalCreateUser
      fetchAllUser={fetchAllUser}/>
      <div className="table-user">
        <TableUser
        handleBtnUpdate={handleBtnUpdate}
        handleBtnDelete={handleBtnDelete}
        listusers={listusers}
        />
      </div>
      <ModalUpdateUser
      show={showModalUpdate}
      setShow={setShowModelUpdate}
      dataUpdate={dataUpdate}
      fetchAllUser={fetchAllUser}
      resetDataUpdate={resetDataUpdate}
      />
      <ModalDeleteUser
      show = {showModalDelete}
      setShow={setShowModalDelete}
      dataDelete = {dataDelete}
      fetchAllUser={fetchAllUser}

      />
    </div>
  )
}
export default ManageUser