import { sessionService } from "redux-react-session";

export const login = (email, password) => async () => {
  try {
    //const response = await sessionApi.login({ user }); LOGIN API
    const response = {
      token: "ADSDNHJBSFC",
      email: email,
      password: password,
    };

    sessionService.saveSession();
    sessionService.saveUser(response);
    console.log("response", response);
  } catch (err) {
    console.log("Error while logging in!");
  }
};

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
