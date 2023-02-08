import React, { useRef, useEffect } from "react";
import classes from "../styles/SignUp.module.css";
import Navbar from "../Navbar/Navbar";
import { register } from "../../store/actions/user-actions";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {UserActions} from '../../store/index'

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const confirmPwd = useRef();
  
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = pwdRef.current.value;
    const confirmPassword = confirmPwd.current.value;

    if (!name || !email || !password || !confirmPassword) {
      return alert.error("Please fill all required fields");
    }
    if (confirmPassword !== password) {
      return alert.error("Password and Confirm password do not match");
    }

    dispatch(register({ name, email, password }))
  };

  const error = useSelector(state => state.user.error)
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  useEffect(() => {
    if (error) {
      alert.error(error)
    }
    if (isAuthenticated) {
      dispatch(UserActions.clearError())
      navigate('/account')
    }
    
  }, [alert, error, navigate, isAuthenticated, dispatch]);


  return (
    <>
      <Navbar />
      <div className={classes.complete}>
        <div className={classes["complete-form"]}>
          <div style={{ textAlign: "center", marginTop: "10px", fontSize: "28px" }}>SIGN UP</div>
          <form className={classes.singUpForm} onSubmit={onSubmitHandler}>
            <div className={classes.formInputs}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                ref={nameRef}
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                className={classes.input}
              />
            </div>
            <div className={classes.formInputs}>
              <input
                type="password"
                name="password"
                ref={pwdRef}
                placeholder="Password"
                className={classes.input}
              />
            </div>

            <div className={classes.formInputs}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                ref={confirmPwd}
                className={classes.input}
              />
            </div>

            <button className={classes.Btn}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
