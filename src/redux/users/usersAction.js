import axios from "axios";

const fetchUsers = () => {
  return {
    type: "FETCH-USERS",
  };
};

const fetchUsersSuccess = (user) => {
  return {
    type: "FETCH-USERS-SUCCESS",
    payload: user,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: "FETCH-USERS-FAILURE",
    payload: error,
  };
};

export const fetchAPI = () => {
  return (dispatch) => {
    dispatch(fetchUsers());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((respond) => {
        const data = respond.data;
        dispatch(fetchUsersSuccess(data));
      })
      .catch((err) => {
        const error = err.data;
        dispatch(fetchUsersFailure(error));
      });
  };
};
