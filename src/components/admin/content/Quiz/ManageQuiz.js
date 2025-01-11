import { useState } from "react"
import { Button } from "react-bootstrap"
import { postNewQuiz } from "../../../../service/apiService";
import { toast } from "react-toastify";

const ManageQuiz = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState();


    const handleUpload = (event) => {
        setImage(event.target.files[0])

    }
    const handleAddQuiz = async () => {
        let res = await postNewQuiz(name, description, type, image)
        console.log(res);
        if (name == null && description == null) {
            toast.error("Please input Name,Description")

        }
        if (res && res.EC == 0) {
            toast.success(res.EM)
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM)
        }

    }
    return (
        <div className="quiz-container">
            <div className="title"><b>Manage Quiz</b></div><hr></hr>
            <div className="add-new">
                <fieldset className="border rounded-3 p-3">
                    <legend className="float-none w-auto px-3">Add New Quiz:</legend>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(event) => setName(event.target.value)} />
                        <label htmlFor="floatingInput">Quiz Name:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(event) => setDescription(event.target.value)} />
                        <label htmlFor="floatingInput">Descriptions</label>
                    </div>

                    <div>
                        <select className="form-select"
                            aria-label="Default select example"
                            placeholder="Level"
                            onChange={(event) => setType(event.target.value)}>
                            <option value="" disabled selected>Select Level</option>
                            <option value="EASY">Easy</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="HARD">Hard</option>
                        </select>
                    </div>
                    <div className="input-group mb-3" style={{ marginTop: '20px' }}>
                        <input type="file" onChange={(event) => { handleUpload(event) }} className="form-control" id="inputGroupFile01" />
                        <label className="input-group-text" htmlFor="inputGroupFile01" onClick={(event) => handleUpload(event)}>Upload</label>

                    </div>
                    <Button className="btn btn-primary" onClick={() => handleAddQuiz()}>Add</Button>
                </fieldset>
            </div>
            <div className="list-detail">list</div>
        </div>
    )

}

export default ManageQuiz