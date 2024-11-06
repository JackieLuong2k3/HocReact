import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllUser } from '../../service/apiService';
import { Button } from 'react-bootstrap';


const TableUser = () => {
    const [listusers, setListUsers] = useState([]);

    useEffect(() => {
        fetchAllUser()
    }, [])
    const fetchAllUser = async () => {
        let res = await getAllUser()
        setListUsers(res.DT)
        console.log(res.DT)
    }
    console.log("render view")
    return (
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listusers.map((user, index) => {
                    return (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td colSpan={1}><Button className='btn-warning'>Delete</Button> 
                            <Button className='btn-danger'>Edit</Button>
                            <Button className='btn-secondary'>View</Button>
                            </td>
                        </tr>
                    )
                })}
                {listusers && listusers.length === 0 &&
                    <tr>
                        <td colSpan={4}>Not found data</td>
                    </tr>
                }
            </tbody>
        </Table>)
}
export default TableUser;