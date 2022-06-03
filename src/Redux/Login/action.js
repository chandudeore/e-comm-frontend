export const LOGIN_LOADING = "LOGIN_LOADING";

export const LOGIN_SUCESS = "LOGIN_SUCEESS";

export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login_loading = () => {
  return {
    type: LOGIN_LOADING,
  };
};
export const login_success = (payload) => {
  return {
    type: LOGIN_SUCESS,
    payload,
  };
};

export const login_failure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};
