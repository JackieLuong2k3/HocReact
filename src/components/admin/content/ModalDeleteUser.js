import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../service/apiService';
import { toast } from 'react-toastify';

function ModalDeleteUser(props) {
  const { show, setShow, dataDelete } = props
  const handleClose = () => {
    setShow(false)
  }
  const handleDeleteUser = async () => {
    let data = await deleteUser(dataDelete.id);
    if (data && data.EC === 0) {
      toast.success(data.EM)
      handleClose()
      props.fetchAllUser()
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete the <b>{dataDelete && dataDelete.username ? dataDelete.username : "None username"}</b> </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { handleDeleteUser() }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;