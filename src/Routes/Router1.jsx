import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Cart } from "../Component/Cart";
import { Category } from "../Component/Catogery";
import { Home } from "../Component/Home";
import { Login } from "../Component/Login";
import { Otp } from "../Component/Otp";
import { Pagecheck } from "../Component/Pagecheck";
import { Payment } from "../Component/Payment";
import { ProductPage } from "../Component/ProductPage";
import { Register } from "../Component/Register";

function PrivateRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" />;
}

export default function Router1() {
  const { isAuth } = useSelector((state) => state.login);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product-page/:id" element={<ProductPage />}></Route>

        <Route
          path="/cart"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/checkout" element={<Pagecheck />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/category/:cat" element={<Category />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
      </Routes>
    </>
  );
}
