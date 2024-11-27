import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import './TableUserPaginate.scss'

const TableUserPaginate = (props) => {
  const { listusers } = props
  const handlePageClick = (event) => {
    const pageNumber = parseInt(event.selected, 10); // Chuyển đổi event.selected thành số nguyên
    console.log(
      `User requested page number ${pageNumber + 1}` // Hiển thị số trang được yêu cầu
    );
    props.setCurrentPage(pageNumber+1)
    props.fetchAllUser(pageNumber + 1); // Gọi hàm fetchAllUser với số trang đã chuyển đổi
  };

  return (
    <>
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
                <td colSpan={1}><Button className='btn-warning' onClick={() => { props.handleBtnDelete(item) }}>Delete</Button>
                  <Button className='btn-danger' onClick={() => { props.handleBtnUpdate(item) }} >Update</Button>
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

      </Table>
      <div className='paginate' style={{display:'flex',justifyContent:'center'}}>
        <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={props.pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />  
      </div>
    </>
  )
}

export default TableUserPaginate