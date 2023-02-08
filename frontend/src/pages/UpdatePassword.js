import React, { useRef, useState, useEffect } from "react";
import classes from "../components/styles/Login.module.css";
import Navbar from "../components/Navbar/Navbar";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../store/actions/user-actions";
import { ProfileActions } from "../store/index";

const UpdatePassword = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  //   const { isUpdated, updateMessage } = useSelector((state) => state.user);
  //   console.log(isUpdated, updateMessage);

  const { isUpdated, error } = useSelector((state) => state.profile);
  console.log(isUpdated, error);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!oldPassword && !newPassword && !confirmPassword) {
      return alert.error("Please enter all fields");
    }
    if (newPassword !== confirmPassword) {
      return alert.error("Password and confirmPassword do not match");
    }

    setoldPassword("");
    setnewPassword("");
    setconfirmPassword("");
    dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ProfileActions.updatePasswordReset());
    }
    if (isUpdated) {
      alert.success("Password updated successfully");
      dispatch(ProfileActions.updatePasswordReset());
      navigate("/account");
    }
  }, [isUpdated, error, dispatch, alert, navigate]);

  return (
    <>
      <Navbar />
      <div className={classes.complete}>
        <div className={classes["complete-form"]}>
          <div style={{ textAlign: "center", marginTop: "10px", fontSize:"25px" }}>
            CHANGE PASSWORD
          </div>
          <form className={classes.loginForm} onSubmit={onSubmitHandler}>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="oldPassword"
                placeholder="Old Password"
                ref={oldPasswordRef}
                value={oldPassword}
                onChange={(e) => setoldPassword(e.target.value)}
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="newPassword"
                placeholder="newPassword"
                ref={newPasswordRef}
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                ref={confirmPasswordRef}
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                className={classes.input}
              />
            </div>
            <button className={classes.Btn}>Update Password</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
