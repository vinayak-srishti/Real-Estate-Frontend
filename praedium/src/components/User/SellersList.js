import React from 'react';
import Table from 'react-bootstrap/Table';

function SellersList() {
  return (
    <div className='container mt-5 pt-5'>  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </Table></div>
  )
}

export default SellersList