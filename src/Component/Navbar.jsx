import "./css/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <div id="navbar">
        <div className="navbarLink">
          <Link to="/" className="link2">
            Home
          </Link>
        </div>
        <div>
          <input type="text" placeholder="Serch Bar" />
        </div>
        <div className="navbarLink">
          <Link to="/login" className="link2">
            Login
          </Link>
        </div>
        <div className="navbarLink">
          <Link to="/register" className="link2">
            Register
          </Link>
        </div>
        <div>
          <Badge color="secondary" style={{ cursor: "pointer" }}>
            <ShoppingCartIcon
              onClick={() => (true ? navigate("/cart") : "Not true")}
            />
          </Badge>
        </div>
      </div>
    </>
  );
};
