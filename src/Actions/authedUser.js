export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT = 'LOGOUT';

export const setAuthedUser = id => ({
  type: SET_AUTHED_USER,
  id,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
