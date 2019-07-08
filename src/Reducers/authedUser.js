import { SET_AUTHED_USER, LOGOUT } from '../Actions/authedUser';

const authedUserReducer = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case LOGOUT:
      const newState = null;
      return newState;
    default:
      return state;
  }
};

export default authedUserReducer;
