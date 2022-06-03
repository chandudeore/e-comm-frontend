//write the action in the cart
export const CART_LOADING = "CART_LOADING";
export const CART_ADDDATA = "CART_ADDDATA";

export const CART_ERROR = "CART_ERROR";
export const CART_GET = "CART_GET";
export const CART_TOTAL = "CART_TOTAL";
export const CART_ITEM = "CART_ITEM";

//action creator that return the action

export const cart_loading = () => {
  return {
    type: CART_LOADING,
  };
};
export const cart_addData = (payload) => {
  return {
    type: CART_ADDDATA,
    payload,
  };
};

export const cart_error = () => {
  return {
    type: CART_ERROR,
  };
};
export const cart_get = (payload) => {
  return {
    type: CART_GET,
    payload,
  };
};
export const cart_total = (payload) => {
  // console.log("The total is", payload);
  return {
    type: CART_TOTAL,
    payload,
  };
};
export const cart_item = (payload) => {
  return {
    type: CART_ITEM,
    payload,
  };
};
export const cart_update = (item, sum) => (dispatch) => {
  dispatch(cart_item(item));
  dispatch(cart_total(sum));
};

// export const getCartData = () => (dispatch) => {
//   dispatch(cart_loading());
//   fetch(` http://localhost:8080/cart`)
//     .then((res) => res.json())
//     .then((res) => dispatch(cart_get(res)))
//     .catch((err) => console.log(err));
// };

export const cart_add = (payload) => (dispatch) => {
  dispatch(cart_loading());
  fetch(`https://e-comm1234.herokuapp.com/cart`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      //console.log("In the post data part");
    })
    .catch((err) => dispatch(cart_error(err)));
};
