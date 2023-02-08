import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "../components/styles/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {

  const { user, loading } = useSelector((state) => state.user);

  return (
    <>
      {loading ?<p style ={{color:'black'}}>Loading...</p> :<div className={classes.completeDiv}>
        <div className={classes.imageBox}>
          <img src="/images/carousel-3.jpg" alt="Profile Pic"></img>
          <Link to = '/me/update' className={classes.linkImage} style = {{textAlign:"center"}}>Edit Profile <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
        </div>
        <div className={classes.infoBox}>
          <h1>My Profile</h1>
          <div>
            <h4>Full Name</h4>
            <p>{user.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>Joined on</h4>
            <p>{String(user.createdAt).substring(0, 10)}</p>
          </div>

          <div className={classes.lastDiv}>
            <Link to="/orders" className={classes.link}>
              My Orders <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
            <Link to="/password/update" className={classes.link}>
              Change Password{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Profile;
