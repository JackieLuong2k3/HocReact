import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

function ModalResult(props) {
  const { showHideModal, setShowHideModal, dataSubmit } = props
  const handleClose = () => {
    setShowHideModal(false)
  }

  return (
    <>
      <Modal
        show={showHideModal}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ModalResult Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Correct answer <b>{dataSubmit.countCorrect}</b></div>
          <div>Total Answers <b>{dataSubmit.countTotal}</b></div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => { handleClose() }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalResult;