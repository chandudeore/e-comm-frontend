import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProductData } from "../Redux/product/action";
import { Link } from "react-router-dom";
import "./css/Home.css";
import Button from "@mui/material/Button";
import { Box } from "@material-ui/core";
import { Pagination } from "@mui/material";
import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";

export const Home = () => {
  // const [data,setData]=useState([])
  const { product } = useSelector((state) => state.product);
  const catogery = [
    { value: "men's clothing", type: "Men" },
    { value: "jewelery", type: "Women" },
    { value: "electronics", type: "Electronics" },
    { value: "women's clothing", type: "Women" },
  ];
  const [sort, changeSort] = useState("asc");
  const [filter, changeFilter] = useState("price");
  const [cat, category] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);

  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getProductData(sort, filter, cat, page, limit));
  };
  useEffect(() => {
    fetchData();
  }, [sort, cat, page, limit]);

  const handleSort = (e) => {
    changeSort(e.target.value);
  };
  const handleFilter = (e) => {
    category(e.target.value);
  };
  const handlePage = (e, value) => {
    setPage(value);
  };

  return (
    <>
      <div>
        <div id="catogery">
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {catogery.map((e) => (
              <>
                <div id="cat_two" style={{}}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: 17,
                      padding: "5px 15px",
                      borderRadius: "15px",
                      fontWeight: "bold",
                      backgroundColor: "#6FDFDF",
                      fontFamily:
                        " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
                    }}
                    to={`/category/${e.value}`}
                  >
                    {e.type}
                  </Link>
                </div>
              </>
            ))}
          </div>

          <div id="sort">
            <InputLabel>Sort By</InputLabel>
            <Button
              variant="contained"
              color="primary"
              value="asc"
              onClick={handleSort}
            >
              Low to High
            </Button>{" "}
            <Button
              variant="contained"
              color="primary"
              value="desc"
              onClick={handleSort}
            >
              {" "}
              High to Low
            </Button>
          </div>

          <div id="filter" style={{ width: "200px" }}>
            <FormControl fullWidth color="secondary">
              <InputLabel>Filter By</InputLabel>
              <Select onChange={handleFilter}>
                <MenuItem value={""}>All</MenuItem>
                <MenuItem value={"women's clothing"}>Women</MenuItem>
                <MenuItem value={"men's clothing"}>Men</MenuItem>
                <MenuItem value={"electronics"}>Electronic</MenuItem>
                <MenuItem value={"jewelery"}>Jewelery</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div id="container">
        <div id="show_product">
          {product.map((e) => (
            <div key={e.id}>
              <img src={e.image} alt="" />
              <h4>Title:{e.title}</h4>
              <h4>Price:{e.price}₹</h4>
              <h5>Category:{e.category}</h5>
              <Button>
                <Link
                  to={`/product-page/${e.id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: 17,
                    padding: "5px 15px",
                    borderRadius: "15px",
                    fontWeight: "bold",
                    backgroundColor: "#6FDFDF",
                    fontFamily:
                      " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
                  }}
                >
                  Buy Now
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <hr />
        <div id="paginate">
          <Stack spacing={2}>
            <Pagination
              count={4}
              color="secondary"
              size="large"
              onChange={handlePage}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};
