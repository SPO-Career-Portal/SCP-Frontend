import { sessionService } from "redux-react-session";
import axios from "axios";
import { post } from "jquery";

const base_url = "http://localhost:8000"


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

export const register = (roll) => async ()  => {
    try{
      const roll_no=roll;
      
      return sendRequest("/user/register", "POST", {
        roll_no,
      });
    } catch (err) {
      console.log("Error while registering!");
    }
};

export const setPass = (password) => async ()  => {
  try{
    const pass=password;
    const result= sendRequest("/user/register/verify/code=<str:token>/", "POST", {
      pass,
    });
    if(result=="200_OK"){
      sessionService.saveSession();
      sessionService.saveUser(result);
    }
    else{
      alert("Error while registering");
    }

  } catch (err) {
    console.log("Error while registering!");
  }
}; 

export const logout = () =>
  async () => {
    try {
      //await sessionApi.logout(); LOGOUTAPI
      console.log("OUT");
      sessionService.deleteSession();
      sessionService.deleteUser();
    } catch (err) {
      // error
    }
  };

