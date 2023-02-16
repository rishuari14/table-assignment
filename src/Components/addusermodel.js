import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from '../Actions/userActions';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

function AddUserModal() {
  
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail('')
    setMobile('')
    setName('')
    setEmailError(false)
    setEmailErrorMsg('')
  };

  const handleSave = () => {
    const user = {
      name: name,
      email: email,
      mobile: mobile,
    };
    if (email.trim() === '') {
        setEmailError(true);
        setEmailErrorMsg('Email is required')
        return;
      }


    const emailExists = users.find((user) => user.email === email);      //checking if email already exist
    if (emailExists) {
      setEmailError(true);
      setEmailErrorMsg('Email already exists');
      return;
    }

    dispatch(addUser(user));
    handleClose();

  };

  return (
    <div style={{ margin: '10px'}}>
      <Button  variant="contained" color="primary" onClick={handleOpen}>
        Add New User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            error={emailError} helperText={emailError && emailErrorMsg}
            fullWidth
            value={email}
            onChange={(event) => {
                setEmail(event.target.value);
                setEmailError(false);
              }}
          />
          <TextField
            margin="dense"
            label="Mobile"
            type="tel"
            fullWidth
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
          
        </DialogContent>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
          <Button variant="contained" color="secondary" onClick={handleClose} style={{ marginRight: '8px' }}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default AddUserModal;