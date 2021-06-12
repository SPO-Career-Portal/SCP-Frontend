import { sessionService } from 'redux-react-session';

export const login = user =>
  async () => {
    try {
      //const response = await sessionApi.login({ user }); LOGIN API
      const response = {
          token : "ADSDNHJBSFC",
          name : "MRIDUL",
          lastName : "DUBEY",
      }
      sessionService.saveSession();
      sessionService.saveUser(response);
      console.log("reponse", response);
    } catch (err) {
      // error
    }
  };
  export const register = user => 
    async ()  => {
    try{
      const response={
        email : user.email,
        password : user.password
      };
      sessionService.saveSession();
      sessionService.saveUser(response);
      console.log("response", response);
    } catch (err) {
      console.log("Error while logging in!");
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
