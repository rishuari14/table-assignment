import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import Editmodel from './editModel';
import { updateUser, deleteUser } from '../Actions/userActions';
import { styled } from '@mui/material/styles';


const StyledTable = styled(Table)({
    margin: '10px',
  });
  
  const StyledTableRow = styled(TableRow)({
    border: '1px solid black',
  });

  const StyledTableHeaderCell = styled(TableCell)({
    border: '1px solid black',
    fontWeight:'bold'
  });

  const StyledTableBodyCell = styled(TableCell)({
    border: '1px solid black',
  });









const UserList = ({ users, updateUser, deleteUser }) => {
  const [editUser, setEditUser] = useState(null);
  
  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleDeleteUser = (user) => {
    deleteUser(user);
  };

  const handleUpdateUser = (user) => {
    updateUser(user);
    setEditUser(null);
  };

  return (
    <div>
      <StyledTable>
        <TableHead >
          <StyledTableRow >
          <StyledTableHeaderCell >Name</StyledTableHeaderCell>
            <StyledTableHeaderCell  >Email</StyledTableHeaderCell>
            <StyledTableHeaderCell >Mobile</StyledTableHeaderCell>
            <StyledTableHeaderCell >Actions</StyledTableHeaderCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.email} >
            <StyledTableBodyCell style={{fontWeight:'bold' }}>{user.name}</StyledTableBodyCell>
              <StyledTableBodyCell>{user.email}</StyledTableBodyCell>
              <StyledTableBodyCell>{user.mobile}</StyledTableBodyCell>
              <StyledTableBodyCell >
                <Button  variant='contained' onClick={() => handleEditUser(user)}>Edit</Button>
                <Button sx={{ marginLeft: '8px' }} variant='contained' onClick={() => handleDeleteUser(user)}>Delete</Button>
              </StyledTableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      {editUser && (
        <Editmodel
          open={true}
          onClose={() => setEditUser(null)}
          onSubmit={handleUpdateUser}
          initialValue={editUser}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    deleteUser: (user) => dispatch(deleteUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);