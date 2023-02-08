import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route } from "react-router-dom";
import {useAlert} from "react-alert";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
    const navigate = useNavigate()
    const alert = useAlert()
  return (
    <Fragment>
      {
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
                alert.error("Login to access this resource")
              return navigate('/login');
            }

            if (isAdmin === true && user.role !== "admin") {
                return navigate('/login');
            }

            return <Component {...props} />;
          }}
        />
      }
    </Fragment>
  );
};

export default ProtectedRoute;
