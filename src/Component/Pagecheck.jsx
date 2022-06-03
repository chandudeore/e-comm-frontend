import "./css/checkpage.css";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
export const Pagecheck = () => {
  const { total, item } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  return (
    <>
      <div id="check_container">
        <div>
          <h2>Shiping information</h2>
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Enter Your Name"
                required="true"
              />
              <input placeholder="Address" required="true" />
              <input
                placeholder="city"
                variant="outlined"
                color="secondary"
                required="true"
              />
              <br />
              <select id="state" placeholder="State" required="true">
                <option>select State</option>
                <option value={"Maharashtra"}>Maharashtra</option>
                <option value={"Gujarat"}>Gujarat</option>
                <option value={"MP"}>MP</option>
                <option value={"Andhra"}>Andhra Pradesh</option>
                <option value={"jharkhand"}>Jharkhand</option>
              </select>
              <h2>Contact Infomation</h2>
              <input placeholder="Phone" required="true" />

              <input
                type="button"
                value="Place Order"
                onClick={() => navigate("/payment")}
              />
            </form>
          </div>
          {/* <Button
            variant="contained"
            color="secondary"
            sx={{
              margin: 3,
            }}
            onClick={() => navigate("/payment")}
          >
            Place Order
          </Button> */}
        </div>
        <div className="total_pay">
          <h3>Your order</h3>
          <hr />
          <div>
            <div>
              <h4>Product</h4>
            </div>
            <div>
              <h4>SubTotal</h4>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <h4>{item}</h4>
            </div>
            <div>
              <h4>{total}</h4>
            </div>
          </div>
          <hr style={{ border: "ridge" }} />
        </div>
      </div>
    </>
  );
};
