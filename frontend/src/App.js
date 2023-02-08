import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../src/components/layout/AdminSideBar";
import Navbar from '../src/components/Navbar/Navbar'
import Products from "../src/pages/Products";
import Auth from "../src/pages/Auth";
import Profile from "../src/pages/Profile";
import UpdateProfile from "../src/pages/UpdateProfile";
import UpdatePassword from "../src/pages/UpdatePassword";
import ForgotPassword from "../src/pages/ForgotPassword";
import ResetPassword from "../src/pages/ResetPassword";
import Product from "../src/pages/Product";
import Cart from "../src/pages/Cart";
import Shipping from "../src/pages/Shipping";
import OrderConfirm from "../src/pages/OrderConfirm";
import Payment from "../src/pages/Payment";
import Orders from "../src/pages/Order";

import Dashboard from "../src/pages/Dashboard.js";
import NewProduct from "../src/pages/NewProduct";
import ProductList from "../src/pages/ProductList";
import UpdateProduct from "../src/pages/UpdateProduct";
import ProcessOrder from "../src/pages/ProcessOrder";
import OrderList from "../src/pages/OrderList";
import UsersList from "../src/pages/UsersList";
import UpdateUser from "../src/pages/UpdateUser";
import ProductReviews from "../src/pages/ProductReviews";

import { loadUser } from "../src/store/actions/user-actions";
import OrderSuccess from "./pages/OrderSuccess";
import OrderDetail from "./pages/OrderDetail";
import {useAlert} from 'react-alert'

// import Loading from './components/layout/Loading'

function App() {
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(loadUser());
  }, [dispatch]);

  // eslint-disable-next-line
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/process/payment"
          element={
            localStorage.getItem("token") ? (
              <Payment />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route exact path="/" element={ localStorage.getItem("token") ? (
          <Home />
        ) : (
          <Navigate to="/login" />
        )} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/account"
          element={
            localStorage.getItem("token") ? (
              isAuthenticated && <Profile />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/me/update"
          element={
            localStorage.getItem("token") ? (
              <UpdateProfile />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/password/update"
          element={
            localStorage.getItem("token") ? (
              <UpdatePassword />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/success" element={<OrderSuccess />} />
        <Route exact path="/order/confirm" element={<OrderConfirm />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/login" element={<Auth />} />
        <Route exact path="/orders" element={
            localStorage.getItem("token") ? (
              <Orders />
            ) : (
              <Navigate to="/login" /> 
            )
          } />
        <Route exact path="/order/:id" element={<OrderDetail />} />

        <Route exact path="/admin/*" element={<AdminSideBar />}>
          <Route index={true} exact path="dashboard" element={<Dashboard />} />
          <Route exact index={true} path="products" element={<ProductList />} />
          <Route
            exact
            index={true}
            path="product"
            isAdmin={true}
            element={<NewProduct />}
          />

          <Route
            exact
            index={true}
            path="product/:id"
            isAdmin={true}
            element={<UpdateProduct />}
          />
          <Route exact path="orders" isAdmin={true} element={<OrderList />} />

          <Route
            exact
            path="order/:id"
            index={true}
            element={<ProcessOrder />}
          />
          <Route exact path="users" isAdmin={true} element={<UsersList />} />

          <Route
            exact
            path="user/:id"
            index={true}
            element={<UpdateUser />}
          />

          <Route
            exact
            index={true}
            path="reviews"
            isAdmin={true}
            element={<ProductReviews />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
