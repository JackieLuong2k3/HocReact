import ModalCreateUser from "./ModalCreateUser"
import TableUser from '../content/TableUser'
const ManageUser = () => {
  return (
    <div>
      <ModalCreateUser/>
      <div className="table-user">
        <TableUser></TableUser>
      </div>
    </div>
  )
}
export default ManageUser