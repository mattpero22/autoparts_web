
export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'user/SET_CURRENT_USER',
  };
  
  export default USER_ACTION_TYPES;