import { LOGIN_FAILURE, LOGIN_SUCESS, LOGIN_LOADING } from "./action";

const initialstate = {
  isAuth: false,
  loading: false,
  error: false,
  token: "",
};
export const loginReducer = (store = initialstate, { type, payload }) => {
  switch (type) {
    case LOGIN_FAILURE:
      return {
        ...store,
        isAuth: false,
        loading: false,
      };
    case LOGIN_SUCESS:
      return {
        ...store,
        isAuth: true,
        token: payload,
        error: false,
      };
    case LOGIN_LOADING:
      return {
        ...store,
        isAuth: false,
        error: false,
        loading: true,
      };
    default:
      return store;
  }
};
