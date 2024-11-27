import ModalCreateUser from "./ModalCreateUser"
import TableUser from '../content/TableUser'
import ModalUpdateUser from "./ModalUpdateUser"
import { getAllUser,getAllUserPaginate } from '../../../service/apiService';
import { useEffect, useState } from "react"
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = () => {
  const [showModalUpdate, setShowModelUpdate] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [dataUpdate, setDataUpdate] = useState({})
  const [dataDelete, setDataDelete] = useState({})
  const [listusers, setListUsers] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1); // Theo dõi trang hiện tại
  const [pagelimit, setPageLimit] = useState(5); // Theo dõi trang hiện tại


  useEffect(() => {
    fetchAllUser(currentPage)
  }, [])
  const fetchAllUser = async (page) => {
    let res = await getAllUserPaginate(page,pagelimit)    
    setListUsers(res.DT.users)
    setPageCount(res.DT.totalPages)
    console.log(currentPage,pagelimit);
    
  }

  const handleBtnUpdate = (user) => {
    setShowModelUpdate(true)
    setDataUpdate(user)
  }
  const handleBtnDelete = (user) => {
    setShowModalDelete(true)
    setDataDelete(user)
  }
  const resetDataUpdate = () => {
    setDataUpdate({})
  }
  return (
    <div>
      <ModalCreateUser
        fetchAllUser={fetchAllUser}
        pagelimit={pagelimit} 
        currentPage={currentPage}
        />
      <div className="table-user">
        {/* <TableUser
          handleBtnUpdate={handleBtnUpdate}
          handleBtnDelete={handleBtnDelete}
          listusers={listusers}
        /> */}
        <TableUserPaginate
        handleBtnUpdate={handleBtnUpdate}
        handleBtnDelete={handleBtnDelete}
        listusers={listusers}
        pageCount={pageCount}
        fetchAllUser={fetchAllUser}
        setCurrentPage={setCurrentPage}
      />
      </div>
      <ModalUpdateUser
        show={showModalUpdate}
        setShow={setShowModelUpdate}
        dataUpdate={dataUpdate}
        fetchAllUser={fetchAllUser}
        resetDataUpdate={resetDataUpdate}
        pagelimit={pagelimit}
        currentPage={currentPage}
      />
      <ModalDeleteUser
        show={showModalDelete}
        setShow={setShowModalDelete}
        dataDelete={dataDelete}
        fetchAllUser={fetchAllUser}
        pagelimit={pagelimit}
        currentPage={currentPage}
      />
    </div>
  )
}
export default ManageUser