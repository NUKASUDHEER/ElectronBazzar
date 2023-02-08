import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../components/styles/table.css";
import { getAllUsers } from "../store/actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getAllUserActions } from "../store/index";
import UpdateUser from "./UpdateUser";
import { deleteUser } from "../store/actions/user-actions";

const AdminAllUser = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, users, error } = useSelector((state) => state.getAllUser);
  const [edit, setEdit] = useState(false)
  const [user, setUser] = useState({
    id:'',
    name: '',
    email: '',
    role: '',
  })


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(getAllUserActions.getAllUserReset());
    }
    dispatch(getAllUsers());
  }, [dispatch, error, alert]);


  const onEditHandler = (User) => {
    setUser({
      ...user,
      id: User._id,
      name: User.name,
      email: User.email,
      role: User.role
    })
    setEdit(true)
  }

  const onDeleteHandler = (id) => {
    dispatch(deleteUser(id))
    window.location.reload()
  }



  // console.log(users);
  return (
    <>
    
    {edit ? <UpdateUser user = {user}/> :(
      <div>
      <div className="heading">
        <h1>AllUsers</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </tbody>
        <tbody>
          {loading ? (
            <p style={{ color: "black" }}>Loading..</p>
          ) : (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <span className="tableicon">
                      <FontAwesomeIcon icon={faPen} onClick={onEditHandler.bind(null, user)}/>
                  </span>
                  <span className="tableicon">
                    <FontAwesomeIcon icon={faTrash} onClick={onDeleteHandler.bind(null,user._id)} />
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    )}
    </>
    
  );
};

export default AdminAllUser;
