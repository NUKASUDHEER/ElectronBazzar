import React from "react";
import classes from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/user-actions";

const Navbar = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOutHandler = (e) => {
    e.preventDefault();
    alert.success("Logged out successfully!");
    dispatch(logout());
    navigate("/login");
  };
  const [keyword, setKeyword] = useState("");
  const [isProfileTouched, setisProfileTouched] = useState(false);
  // console.log(isProfileTouched);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/products/${keyword}`);
  };

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link to="/" className={`${classes.links} ${classes["font-poppin"]}`}>
            ECOMMERCE
          </Link>
        </div>

        <div>
          <button
            className={classes["dropdown-content"]}
            onClick={(e) => navigate("/products")}
          >
            Products
          </button>
          {localStorage.getItem("role") &&
            localStorage.getItem("role") === "admin" && (
              <button className={classes["dropdown-content"]}>
                <Link
                  style={{ margin: "0", padding: "0" }}
                  to="/admin/dashboard"
                >
                  Dashboard
                </Link>
              </button>
            )}
        </div>

        <div className={classes.search}>
          <form onSubmit={onSubmitHandler}>
            <input
              className={classes["search-header"]}
              type="text"
              placeholder="Search..."
              onChange={(e) => setKeyword(e.target.value)}
            />
          </form>
        </div>

        <ul className={classes["nav-list"]}>
          <li className={`${classes.item} ${classes["font-poppin"]} `}>
            <Link to="/" className={`${classes.links}`}>
              Home
            </Link>
          </li>
          <li className={`${classes.item} ${classes["font-poppin"]}`}>
            <Link to="/contact" className={`${classes.links}`} id="contact">
              Contact
            </Link>
          </li>
          <li className={classes.item}>
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartPlus} className={classes.black} />{" "}
            </Link>
          </li>
          <li className={classes.item}>
            <Link>
              <FontAwesomeIcon
                icon={faUser}
                className={classes.black}
                onClick={() => setisProfileTouched(!isProfileTouched)}
              />{" "}
            </Link>
          </li>
        </ul>
      </nav>
      {isProfileTouched && (
        <div className={classes.toggleBox}>
          <ul
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#efefef",
              borderRadius: "10px",
              // marginLeft:'0'
            }}
          >
            <li style={{ width: "100%", marginRight:'15%', textAlign:'center' }} className={classes.tag}>
              <Link
                onClick={onLogOutHandler}
                style={{ color: "black", marginRight: "15px" }}
              >
                Log out
              </Link>
            </li>
            <li style={{ width: "100%", marginRight:'15%', textAlign:'center' }} className={classes.tag}>
              {" "}
              <Link
                to="/account"
                style={{ color: "black", marginRight: "15px" }}
              >
                Account
              </Link>
            </li>
            <li style={{ width: "100%", marginRight:'15%', textAlign:'center' }} className={classes.tag}>
              {" "}
              <Link
                to="/orders"
                style={{ color: "black", marginRight: "15px" }}
              >
                Orders
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
