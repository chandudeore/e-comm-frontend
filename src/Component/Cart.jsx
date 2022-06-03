import { useEffect, useState } from "react";
import "./css/cart.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { cart_update } from "../Redux/Cart/action";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  let sum = 0,
    cnt = 0;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getData = () => {
    fetch(` https://e-comm1234.herokuapp.com/cart`)
      .then((res) => res.json())
      .then((res) => setCart(res))
      .catch((err) => console.log(err));
  };

  cart.forEach((E) => {
    sum = sum + E.price;
    cnt++;
  });

  useEffect(() => {
    getData();
    dispatch(cart_update(cnt, Math.floor(sum)));
  }, [sum, cnt]);

  const handleremove = (e) => {
    let id = e.target.id;

    fetch(`https://e-comm1234.herokuapp.com/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => {
        alert("Delete Item succesfully");
        getData();
      })
      .catch((err) => console.log(err));
  };
  const checkOut = () => {
    alert("Welcome to the checkout page");
    navigate("/checkout");
  };
  return (
    <div id="cart_container">
      <div id="cart_info">
        {cart.map((ele) => (
          <>
            <div className="prod_info" key={ele.id}>
              <div>
                <img src={ele.image} alt="" />
              </div>
              <div>
                <h4>Title:{ele.title}</h4>
                <p>Description:{ele.description}</p>
                <p>Price:{ele.price}₹</p>

                <button id={ele.id} onClick={handleremove}>
                  DELETE
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div id="cart_total">
        <div>
          {cart.map((e) => (
            <>
              <div className="cart_div">
                <div>
                  <h5>Price{e.price}</h5>
                </div>
              </div>
            </>
          ))}
          <hr />
          <div className="value">
            <h5>Item:{cnt}</h5>
            <h5>Total Price:{Math.ceil(sum)}</h5>
          </div>
          <Box
            sx={{
              margin: 2,
              borderRadius: 450,
              width: 250,
              height: 100,
            }}
          >
            <Button variant="contained" color="secondary" onClick={checkOut}>
              Proceed To checkout
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};
