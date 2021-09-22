import {
    MENUS_REQUEST,
    MENUS_RESPONSE
  } from './actions';
  
  const initialState = {
    menus: null,
    loading: false
  };
  
  const restaurantsList = (state = initialState, action) => {
    switch (action.type) {
      case MENUS_REQUEST:
        return {
          ...state,
          loading : true
        };
      case MENUS_RESPONSE:
        return {
            ...state,
            loading : false,
            menus : action.menus
          };
      default:
        return state;
    }
  };
  
  export default restaurantsList;