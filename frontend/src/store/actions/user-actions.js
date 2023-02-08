import {
  UserActions,
  getAllUserActions,
  ProfileActions,
  forgotPasswordActions,
  updateUserActions,
  deleteUserActions,
} from "../index";

export const login = (email, password) => async (dispatch) => {
  dispatch(UserActions.loginRequest());

  const response = await fetch(`http://localhost:4000/api/v1/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (data.success) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);
    localStorage.setItem("name", data.user.name);
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("createdAt", data.user.createdAt);
    dispatch(UserActions.setUser(data));
  }
  console.log(data);
  if (data.success) dispatch(UserActions.loginSuccess(data.user));
  else dispatch(UserActions.loginFail(data.message));
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(UserActions.registerUserRequest());

    const response = await fetch(`http://localhost:4000/api/v1/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    localStorage.setItem("token", data.token);
    dispatch(UserActions.registerUserSuccess(data.user));
    console.log(data);
  } catch (error) {
    dispatch(UserActions.registerUserFail(error.response.data.message));
  }
};

export const loadUser = () => async (dispatch) => {
  dispatch(UserActions.loadUserRequest());

  const response = await fetch("http://localhost:4000/api/v1/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  // console.log(data);
  if (data.success) dispatch(UserActions.loadUserSuccess(data.user));
  else dispatch(UserActions.loadUserFail(data.message));
};

export const logout = () => async (dispatch) => {
  const sendRequest = async () => {
    const url = "http://localhost:4000/api/v1/logout";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const data = await sendRequest();
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("createdAt");
  if (data.success) dispatch(UserActions.logoutSuccess());
  else dispatch(UserActions.logoutFail(data.message));
};

export const updateProfile = (name, email) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const sendUpdateRequest = async () => {
    let url = "http://localhost:4000/api/v1/me/update";
    const response = await fetch(url, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    const data = await response.json();
    return data;
  };
  const data = await sendUpdateRequest();
  dispatch(UserActions.setUser(data));
};

export const updatePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const sendUpdateRequest = async () => {
      let url = "http://localhost:4000/api/v1/password/update";
      const response = await fetch(url, {
        method: "PUT",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
          confirmPassword,
        }),
      });
      const data = await response.json();
      return data;
    };

    const data = await sendUpdateRequest();
    console.log(data);
    if (data.success) dispatch(ProfileActions.updatePasswordSuccess());
    else dispatch(ProfileActions.updatePasswordFailed(data));
  };

export const forgotPassword = (email) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const sendUpdateRequest = async () => {
    let url = "http://localhost:4000/api/v1/password/forgot";
    const response = await fetch(url, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await response.json();
    return data;
  };

  const data = await sendUpdateRequest();
  console.log(data);
  if (data.success) dispatch(forgotPasswordActions.forgotPasswordSuccess(data));
  else dispatch(forgotPasswordActions.forgotPasswordFail(data.message));
};

export const resetPassword = (token, passwords) => async (dispatch) => {
  const sendUpdateRequest = async () => {
    let url = `http://localhost:4000/api/v1/password/reset/${token}`;
    const response = await fetch(url, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: passwords.password,
        confirmPassword: passwords.confirmPassword,
      }),
    });
    const data = await response.json();
    return data;
  };

  const data = await sendUpdateRequest();
  console.log(data);
  if (data.success) dispatch(forgotPasswordActions.forgotPasswordSuccess(data));
  else dispatch(forgotPasswordActions.forgotPasswordFail(data.message));
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch(getAllUserActions.getAllUserRequest());
    const response = await fetch(`http://localhost:4000/api/v1/admin/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    // console.log(data);
    dispatch(getAllUserActions.getAllUserSuccess(data.users));
  } catch (error) {
    dispatch(getAllUserActions.getAllUserFail(error.response.data.message));
  }
};

const token = localStorage.getItem("token");

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch(updateUserActions.updateUserRequest());

    const response = await fetch(
      `http://localhost:4000/api/v1/admin/user/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json", token },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    dispatch(updateUserActions.updateUserSuccess(data.success));
  } catch (error) {
    dispatch(updateUserActions.updateUserFail(error.response.data.message));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(deleteUserActions.deleteUserRequest());

    const response = await fetch(
      `http://localhost:4000/api/v1/admin/user/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    dispatch(deleteUserActions.deleteUserSuccess(data));
  } catch (error) {
    dispatch(deleteUserActions.deleteUserFail(error.response.data.message));
  }
};
