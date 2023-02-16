import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import UserList from './Components/UserList';
import {useState} from 'react'
import DeletedUserList from './Components/DeletedUser';
import userReducer from './Reducer/userReducer';
import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddUserModal from './Components/addusermodel';

const store = configureStore({               //store is configured
  reducer: userReducer,
})


const StyledTabs = styled(Tabs)({
  margin: '10px',
  borderBottom:'1px solid grey',
  '& .MuiTabs-indicator': {
    display:'none'
  },
  
 
});




function App() {



  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <StyledTabs value={tabIndex} onChange={handleTabChange} >
        <Tab  sx={{color: tabIndex === 0 ? 'grey' : 'blue' , border: tabIndex === 0 ? '1px solid grey':'none',borderBottom:'none'}}
         label="Users" />
        <Tab sx={{color: tabIndex === 1 ? 'grey' : 'blue' ,border: tabIndex === 1 ? '1px solid grey':'none',borderBottom:'none' }}
         label="Delete Users" />
      </StyledTabs>
      {tabIndex === 0 && (
        <> 
          <AddUserModal/>
          <UserList />
        </>
      )}
      {tabIndex === 1 && (
      
        <DeletedUserList  />
      )}
      </div>
    </Provider>
  );
}

export default App;
