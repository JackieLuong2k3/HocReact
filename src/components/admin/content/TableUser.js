import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


const TableUser = (props) => {
    const {listusers} =props
    return (
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listusers.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td colSpan={1}><Button className='btn-warning' onClick={()=>{props.handleBtnDelete(item)}}>Delete</Button> 
                            <Button className='btn-danger' onClick={()=>{props.handleBtnUpdate(item)}} >Update</Button>
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