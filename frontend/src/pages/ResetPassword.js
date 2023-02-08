import React, { useRef, useState, useEffect } from "react";
import classes from "../components/styles/Login.module.css";
import Navbar from "../components/Navbar/Navbar";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../src/store/actions/user-actions";
import { resetForgotPasswordActions } from "../store/index";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const alert = useAlert();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!password || !confirmPassword) {
      return alert.error("Please Enter all fields!");
    }
    if (password !== confirmPassword) {
      return alert.error("Password and confirm password do not match!");
    }

    dispatch(resetPassword(params.token, { password, confirmPassword }));
  };

  const { error, success } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(resetForgotPasswordActions.resetForgotPasswordReset());
    }
    if (success) {
      alert.success("Password Updated Successfully");
      navigate("/login");
    }
  }, [alert, error, success, dispatch, navigate]);

  return (
    <>
      <Navbar />
      <div className={classes.complete}>
        <div className={classes["complete-form"]}>
          <div
            style={{ textAlign: "center", marginTop: "10px", fontSize: "28px" }}
          >
            UPDATE PASSWORD
          </div>
          <form className={classes.loginForm} onSubmit={onSubmitHandler}>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="password"
                placeholder="New Password"
                ref={passwordRef}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                className={classes.input}
              />
            </div>
            <button className={classes.Btn}>UPDATE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
