import Immutable from 'immutable';
export const initialState = Immutable.Map({
    request: [],
    authenticated: false
});

const changeUserState = (state = initialState,action) =>{
    switch(action.type){
        case "LOGIN" : return state.set('authenticated',true);
        case "LOGOUT" : return state.set('authenticated',false);
        default : return state.set('authenticated',false);
    }
}

export default changeUserState;