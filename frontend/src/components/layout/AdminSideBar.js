import React from "react";
import "../styles/AdminSidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { showAction } from "../../store/AdminCreateFormShowSlice";

import {
  faBars,
  faUser,
  faChartLine,
  faStar,
  faBox,
  faCartShopping,
  faCartPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Outlet } from "react-router-dom";

const AdminSideBar = ({ children }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.FormShow.show);

  const onToggleHangler = () => {
    dispatch(showAction.toggleShow());
  };

  const menuItem = [
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      icon: faChartLine,
    },
    {
      path: "/admin/products",
      name: "AllProducts",
      icon: faCartShopping,
    },
    {
      path: "/admin/product",
      name: "CreateProduct",
      icon: faCartPlus,
    },
    {
      path: "/admin/orders",
      name: "Orders",
      icon: faBox,
    },
    {
      path: "/admin/users",
      name: "Users",
      icon: faUser,
    },
    {
      path: "/admin/reviews",
      name: "Review",
      icon: faStar,
    },
  ];
  return (
    <>
      <div className="container">
        <div style={{ width: show ? "28%" : "7%" }} className="sidebar">
          <div className="top_section">
            {show && <h1 className="logo">Admin Dashboard</h1>}
            <div className="bars">
              <FontAwesomeIcon
                onClick={onToggleHangler}
                icon={show ? faXmark : faBars}
              />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <Link to={item.path} key={index} className="link">
              <div className="iconTextLink">
                <div className={show ? "Adminicon" : "AdminIconClose"}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                {show && <div className="link_text">{item.name}</div>}
              </div>
            </Link>
            
          ))}
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminSideBar;
