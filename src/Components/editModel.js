import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const Editmodel = ({ open, onClose, onSubmit, initialValue }) => {
  const [email, setEmail] = useState(initialValue.email || '');
  const [mobile, setMobile] = useState(initialValue.mobile || '');
  const [name, setName] = useState(initialValue.name || '');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleSubmit = () => {
    if (email.trim() === '') {
      setEmailError(true);
      return;
    }

    onSubmit({ email, mobile, name });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <TextField  disabled={true}  margin="dense" label="Email" value={email} onChange={handleEmailChange} error={emailError} helperText={emailError && 'Email is required'} fullWidth />
        <TextField   margin="dense" label="Mobile" value={mobile} onChange={(event) => setMobile(event.target.value)} fullWidth />
        <TextField  margin="dense"  label="Name" value={name} onChange={(event) => setName(event.target.value)} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Update</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Editmodel;