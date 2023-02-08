import React, { useRef, useState, useEffect } from "react";
import classes from "../components/styles/Login.module.css";
import Navbar from '../components/Navbar/Navbar'
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../src/store/actions/user-actions"
import {forgotPasswordActions} from '../store/index'

const ForgotPassword = () => {
    const alert = useAlert();
    const emailRef = useRef();
    const dispatch = useDispatch();


    const [Email, setEmail] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        if (!email) {
            return alert.error("Invalid Email!")
        }

        dispatch(forgotPassword(email));
    }

    const { error, message } = useSelector(state => state.forgotPassword)
    
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(forgotPasswordActions.forgotPasswordReset())
        }
        if (message) {
            alert.success(message)
        }
    }, [alert, error, message, dispatch]);

    return (<>
    
        <Navbar />
        <div className={classes.complete}>
        <div className={classes["complete-form"]}>
          <h4 style={{ textAlign: "center", marginTop: "10px",marginLeft:'25%'}}>UPDATE PROFILE</h4>
          <form className={classes.loginForm} onSubmit={onSubmitHandler}>
            <div className={classes.formInputs}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                value={Email}
                onChange={e=>setEmail(e.target.value)}
                className={classes.input}
              />
            </div>
            <button className={classes.Btn}>Send Verification Link</button>
          </form>
        </div>
      </div>
        </>
  
  )
}

export default ForgotPassword