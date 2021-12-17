import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  user: {
    "_id":"61b5f26629cf719d838f08e3",
    "username":"ali",
    "email":"ali@gmail.com",
    "password":"$2b$10$Ps.xIfZqJNOeo.wvBdIo1OopvZ.c7AQBbXRjT7pzXUAJ0Ydt/onxW",
    "profilePicture":"",
    "coverPicture":"",
    "followers":[],
    "followings":["61b5f27829cf719d838f08e5"],
    "isAdmin":false,
    "description":"Hey Its Ali from pakistan!"
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
