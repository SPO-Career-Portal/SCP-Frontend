import Immutable from "immutable";
export const initialState = Immutable.Map({
  request: [],
  authenticated: false,
});

const changeUserState = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
      };
    case "USER_INTERNSHIP":
      return {
        ...state,
        eligibleInternship: action.object,
      };
    case "USER_PLACEMENT":
      return {
        ...state,
        eligiblePlacement: action.object,
      };
    default:
      return state;
  }
};

export default changeUserState;
