import React, { useRef, useState } from "react";
import classes from "../components/styles/Login.module.css";
import Navbar from '../components/Navbar/Navbar'
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../src/store/actions/user-actions"
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const alert = useAlert();
    const emailRef = useRef();
    const nameRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
    
        if (!email && !name) {
          return alert.error("Please fill all the required fields!");
        }
        setEmail('')
        setName('')
        dispatch(updateProfile(name, email)).then(() => {
            alert.success("Update Successful!")
            navigate('/account')
        });
      };
    
    return (<>
    
        <Navbar />
        <div className={classes.complete}>
        <div className={classes["complete-form"]}>
          <div style={{ textAlign: "center", marginTop: "10px", fontSize: "28px" }}>UPDATE PROFILE</div>
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
            <div className={classes.formInputs}>
              <input
                type="name"
                name="name"
                placeholder="Name"
                ref={nameRef}
                value={Name}
                onChange={e=>setName(e.target.value)}
                className={classes.input}
              />
            </div>
            <button className={classes.Btn}>Update Profile</button>
          </form>
        </div>
      </div>
        </>
  
  )
}

export default UpdateProfile