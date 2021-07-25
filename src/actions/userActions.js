import { sessionService } from "redux-react-session";
import axios from "axios";

// URLs
const base_url = "http://localhost:5000";
const EligibleInternships_url = "/interns";
const EligiblePlacements_url = "/placements";

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

export const login = (username) => async () => {
  try {
    const response = {
      username: username,
    };

    sessionService.saveSession();
    sessionService.saveUser(response);
    console.log("response", response);
  } catch (err) {
    console.log("Error while logging in!");
  }
};

export const register = (roll) => async () => {
  try {
    const roll_no = roll;

    return sendRequest("/user/register", "POST", {
      roll_no,
    });
  } catch (err) {
    console.log("Error while registering!");
  }
};

export const setPass = (password) => async () => {
  try {
    const pass = password;
    const result = sendRequest(
      "/user/register/verify/code=<str:token>/",
      "POST",
      {
        pass,
      }
    );
    if (result == "200_OK") {
      sessionService.saveSession();
      sessionService.saveUser(result);
    } else {
      alert("Error while registering");
    }
  } catch (err) {
    console.log("Error while registering!");
  }
};


export const logout = () =>
  async () => {
    try {
      axios.defaults.withCredentials = true;
      await axios.post(base_url+"/user/auth/logout/")
      sessionService.deleteSession();
      sessionService.deleteUser();
    } catch (err) {
      // error
    }
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
  fetch(base_url + EligibleInternships_url) // update url
    .then((response) => response.json())
    .then((data) => {
      dispatch(UserInternshipData(data));
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
  fetch(base_url + EligiblePlacements_url) // update url
    .then((response) => response.json())
    .then((data) => {
      dispatch(UserPlacementData(data));
    })
    .catch((error) => console.log(error));
};

