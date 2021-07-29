import { sessionService } from "redux-react-session";
import axios from "axios";

// URLs
const base_url = "http://127.0.0.1:8000/";
const EligibleInternships_url = "user/interns/";
const EligiblePlacements_url = "user/placements/";

<<<<<<< HEAD
const sendRequest = async (url, method, body, headers = {}) => {
  const response = await axios({
    method,
    url: base_url + url,
    data: body,
    headers,
  });
  console.log(response);
  return response.data;
};

export const login = (email) => async () => {
=======
export const login = (username, admin) => async () => {
>>>>>>> cd87215dd29809ae810151092154674c957e9258
  try {
    //const response = await sessionApi.login({ user }); LOGIN API
    const response = {
<<<<<<< HEAD
      email: email,
=======
      username: username,
      admin: admin,
>>>>>>> cd87215dd29809ae810151092154674c957e9258
    };

    sessionService.saveSession();
    sessionService.saveUser(response);
    console.log("response", response);
  } catch (err) {
    console.log("Error while logging in!");
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
export const logout = () => async () => {
  try {
    //await sessionApi.logout(); LOGOUTAPI
    console.log("OUT");
    sessionService.deleteSession();
    sessionService.deleteUser();
  } catch (err) {
    console.log("Error while logging out!");
  }
};
=======
export const register = (roll) => async () => {
  try {
    const roll_no = roll;
=======
export const setPass = (password) => async () => {
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get("code");
>>>>>>> cd87215dd29809ae810151092154674c957e9258

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
  //   sessionService.deleteUser();
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
<<<<<<< HEAD

>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
=======
>>>>>>> cd87215dd29809ae810151092154674c957e9258
