const initialState = {
    users: [],
    deletedUsers: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case 'UPDATE_USER':
        return {
          ...state,
          users: state.users.map((user) => (user.email === action.payload.email ? action.payload : user)),
        };
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter((user) => user.email !== action.payload.email),
          deletedUsers: [...state.deletedUsers, action.payload],
        };
      case 'RESTORE_USER':
        return {
          ...state,
          users: [...state.users, action.payload],
          deletedUsers: state.deletedUsers.filter((user) => user.email !== action.payload.email),
        };
      default:
        return state;
    }
  };
  
  export default userReducer;