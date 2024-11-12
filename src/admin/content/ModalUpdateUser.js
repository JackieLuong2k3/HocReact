import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../content/ModelCreateUser.scss'
import { FcPlus } from 'react-icons/fc';
import { postCreateUser, putUpdateUser } from '../../service/apiService';
import { toast } from 'react-toastify';
import _ from "lodash"

const ModalUpdateUser = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [img, setImg] = useState("");
    const [previewImg, setPreviewImg] = useState("");
    const { setShow, dataUpdate,resetDataUpdate } = props


    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email || "");
        setPassword(dataUpdate.password || "");
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            if (dataUpdate.image) {
                setPreviewImg(`data:image/jpeg;base64,${dataUpdate.image}`)
            }

        }
    }, [dataUpdate])
    const handleUpLoadImg = (event) => {
        setImg(event.target.files[0])
        setPreviewImg(URL.createObjectURL(event.target.files[0]))
    }
    const handleClose = () => {
        setShow(false)
        setEmail("")
        setPassword("")
        setUsername("")
        setRole("User")
        setImg("")
        setPreviewImg("")
        resetDataUpdate()
    }

    const handleUpdateUser = async () => {

        // get api
        let data = await putUpdateUser(dataUpdate.id, username, role, img);
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
        <div>
            <Modal
                size="xl"
                show={props.show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Update User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control disabled type="email" placeholder="Enter email" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control disabled type="password" placeholder="Password" value={password || ""} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Role</Form.Label>
                                <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="USER">USER</option>
                                </Form.Select>
                            </Form.Group>
                        </Row >
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label className='uploadImg'>
                                <label className='label-upload' htmlFor='labelUp'><FcPlus />Upload Image</label>
                            </Form.Label>
                            <input type='file' hidden id='labelUp' onChange={(e) => handleUpLoadImg(e)} />
                        </Form.Group>
                        <div className='image-preview'>
                            {previewImg ?
                                <img src={previewImg} alt="Preview" />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                        <Button variant="primary" type="button" onClick={() => handleUpdateUser()}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default ModalUpdateUser