import { sessionService } from "redux-react-session";
import axios from "axios";

// URLs
const base_url = "http://127.0.0.1:8000/";
const EligibleInternships_url = "user/interns/";
const EligiblePlacements_url = "user/placements/";

export const login = (username, admin) => async () => {
  try {
    const response = {
      username: username,
      admin: admin,
    };

    sessionService.saveSession();
    sessionService.saveUser(response);
  } catch (err) {
    console.log("Error while logging in!");
  }
};

export const setPass = (password) => async () => {
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get("code");

  await axios
    .post(base_url + "user/register/verify/code=" + code + "/", {
      password: password,
    })
    .then((res) => {
      alert("Password set successfully\nProceed to login");
    })
    .catch((err) => {
      console.log(err);
      alert("Link expired");
    });
};

export const logout = (admin) => async () => {
  axios.defaults.withCredentials = true;
  if (admin) {
    await axios
      .post(base_url + "admin/logout/", {})
      .then((response) => {
        sessionService.deleteSession();
        sessionService.deleteUser();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    await axios
      .post(base_url + "user/auth/logout/", {})
      .then((response) => {
        sessionService.deleteSession();
        sessionService.deleteUser();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // sessionService.deleteSession();
  // sessionService.deleteUser();
};

// store eligible internships in redux
export const storeInternshipData = (object) => ({
  object,
  type: "USER_INTERNSHIP",
});

// add internship data to redux
export const UserInternshipData = (object) => (dispatch) => {
  dispatch(storeInternshipData(object));
};

// fetch internship data
export const fetchInternships = (url) => (dispatch) => {
  axios.defaults.withCredentials = true;
  axios
    .get(base_url + EligibleInternships_url) // update url
    .then((response) => {
      dispatch(UserInternshipData(response.data));
    })
    .catch((error) => console.log(error));
};

// store eligible placements in redux
export const storePlacementData = (object) => ({
  object,
  type: "USER_PLACEMENT",
});

// add placement data to redux
export const UserPlacementData = (object) => (dispatch) => {
  dispatch(storePlacementData(object));
};

// fetch placements data
export const fetchPlacements = (url) => (dispatch) => {
  axios.defaults.withCredentials = true;
  axios
    .get(base_url + EligiblePlacements_url) // update url
    .then((response) => {
      dispatch(UserPlacementData(response.data));
    })
    .catch((error) => console.log(error));
};

export const deadlineFormatter = (deadline) => {
  let index_T = deadline.indexOf("T");
  let date = deadline.slice(0, index_T);
  let time = deadline.slice(index_T + 1, deadline.indexOf('+'));
  let new_deadline = date + "   ,   " + time;
  return new_deadline;
};