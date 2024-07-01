import React, { createContext } from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const defaultLogOut = () => {};

const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;
