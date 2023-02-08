import React, { useState } from 'react'
import "../components/styles/AdminCreateProduct.css";
import { useDispatch, useSelector } from 'react-redux';  
import {  updateUser } from '../store/actions/user-actions';

const UpdateUser = (props) => {
  // console.log(props);
  const dispatch = useDispatch()
  const show = useSelector((state) => state.FormShow.show);


  const [role, setRole] = useState('')  



  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(props.user.id, {role}))
    window.location.reload()    
  };

  return (
    <>
      <div className="UsercompleteForm" style={{ left: show ? "52%" : "37%" }}>
        <form className="productForm" onSubmit={onSubmitHandler}>
          <div className="createUserForm">
            <div
              style={{ marginLeft: -40, marginTop: -20 }}
              className="heading"
            >
              <h1>UPDATE USER</h1>
            </div>
            <div className="divInput">
              <input
                // onChange={onChangeInputHandler}
                type="text"
                placeholder="user name"
                className="inputField"
                id="name"
                value={props.user.name}
                disabled
              />
            </div>
            <div className="divInput">
              <input
                // onChange={onChangeInputHandler}
                type="email"
                placeholder="email"
                className="inputField"
                id="email"
                value={props.user.email}
                disabled
              />
            </div>
            <div className="userDivInput">
              <select className="selectOption" onChange={(e) => setRole(e.target.value)}>
                <option value="None">Select</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="createButton">
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}


export default UpdateUser
