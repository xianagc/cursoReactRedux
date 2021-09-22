import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_RESPONSE
  } from './actions';
  
  const initialState = {
    userInfo: null, 
    loading: false,
    error: null
  };
  
  const login = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return {
          ...state,
          loading : true
        };
      case USER_LOGIN_RESPONSE:
        return {
            ...state,
            loading : false,
            userInfo : action.userInfo
          };
      default:
        return state;
    }
  };
  
  export default login;