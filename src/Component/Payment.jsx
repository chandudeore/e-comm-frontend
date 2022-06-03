import "./css/payment.css";
import { TextField, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
export const Payment = () => {
  const navigate = useNavigate();
  return (
    <div id="payment">
      <div>
        Add new Debit/credit card
        <div>
          <input
            id="outlined-basic"
            color="secondary"
            placeholder="Card no"
            required
          />
          <input placeholder="Expiry" />
          <input placeholder="cvv" />
          <input placeholder="Name" />
        </div>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            margin: 2,
          }}
          onClick={() => navigate("/otp")}
        >
          BUY NOW
        </Button>
      </div>
    </div>
  );
};
