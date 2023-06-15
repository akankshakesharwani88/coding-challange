import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AddProduct from "../components/addProduct";
import Footer from "../components/footer";
import { Suspense } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import EditProduct from "../components/editProduct";
import Products from "../components/products";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import PrivateRoute from "./PrivateRoutes";

const AllRoutes = () => {
  const suspenseFallback = () => (
    <div style={{ display: "flex", justifyContent: "center" }}>Loading...</div>
  );
  const location = useLocation();
  const isSignupOrLoginPage =
    location.pathname === "/signup" || location.pathname === "/";

  return (
    <>
      {!isSignupOrLoginPage && <Header />}
      {!isSignupOrLoginPage && <Sidebar />}
      {/* <PrivateRoute
          path="/add-product"
          element={<AddProduct />}
          redirectTo="/" 
        />
        <PrivateRoute
          path="/edit-product"
          element={<EditProduct />}
          redirectTo="/"
        /> */}
        {/* <PrivateRoute path="/products" element={<Products />} redirectTo="/" /> */}
      <Suspense fallback={suspenseFallback()}>
        

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </Suspense>

      {!isSignupOrLoginPage && <Footer />}
    </>
  );
};

export default AllRoutes;
