import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export const Category = () => {
  const { cat } = useParams();
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(`https://e-comm1234.herokuapp.com/products?category=${cat}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="show_product">
      {data.map((e) => (
        <div key={e.id}>
          <img src={e.image} alt="" />
          <h4>Title:{e.title}</h4>
          <h4>Price:{e.price}₹</h4>
          <h5>Category:{e.category}</h5>
          <Link to={`/product-page/${e.id}`}>know More...</Link>
        </div>
      ))}
    </div>
  );
};
