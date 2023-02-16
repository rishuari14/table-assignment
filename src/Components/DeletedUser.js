import React from 'react';
import { connect } from 'react-redux';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import { restoreUser } from '../Actions/userActions';


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





const DeletedUserList = ({ deletedUsers, restoreUser }) => {
  const handleRestoreUser = (user) => {
    restoreUser(user);
  };

  return (
    <div>
      <StyledTable>
        <TableHead>
          <StyledTableRow  style={{
              border: "2px solid black",
          }} >
          <StyledTableHeaderCell>Name</StyledTableHeaderCell>
            <StyledTableHeaderCell>Email</StyledTableHeaderCell>
            <StyledTableHeaderCell>Mobile</StyledTableHeaderCell>
            <StyledTableHeaderCell>Actions</StyledTableHeaderCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {deletedUsers.map((user) => (
            <StyledTableRow key={user.email} >
            <StyledTableBodyCell>{user.name}</StyledTableBodyCell>
              <StyledTableBodyCell>{user.email}</StyledTableBodyCell>
              <StyledTableBodyCell>{user.mobile}</StyledTableBodyCell>
              <TableCell>
                <Button variant='contained' color='primary' onClick={() => handleRestoreUser(user)}>Restore</Button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deletedUsers: state.deletedUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    restoreUser: (user) => dispatch(restoreUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletedUserList);