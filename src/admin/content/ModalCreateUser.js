import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../content/ModelCreateUser.scss'
import { FcPlus } from 'react-icons/fc';

const ModalCreateUser = () => {
    const [lgShow, setLgShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsernam] = useState("");
    const [role, setRole] = useState("");
    const [img, setImg] = useState("");
    const [previewImg, setPreviewImg] = useState("");

    const handleUpLoadImg = (event)=>{
        setPreviewImg(URL.createObjectURL(event.target.files[0]))
    }
    return (
        <div>

            <Button onClick={() => setLgShow(true)}>Add new user</Button>

            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="Username" value={username} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Role</Form.Label>
                                <Form.Select defaultValue="User" onChange={(e)=> setRole(e.target.value)}>
                                    <option>Admin</option>
                                    <option>User</option>
                                </Form.Select>
                            </Form.Group>
                        </Row >
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label className='uploadImg'>
                                <label className='label-upload' htmlFor='labelUp'><FcPlus />Upload Image</label>
                            </Form.Label>
                            <input type='file' hidden id='labelUp' value={img} onChange={(e)=>handleUpLoadImg(e)} />
                        </Form.Group>
                        <div className='image-preview'>
                            {previewImg ? 
                                <img src={previewImg} alt="Preview" />
                             : 
                                <span>Preview Image</span>
                            }
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default ModalCreateUser