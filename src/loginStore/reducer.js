const initialState = {
    credentials:{
        username:"", 
         password :""
    }
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'SET_CREDENTIALS': 
            initialState.credentials.username=action.email
            initialState.credentials.password=action.password
            break;
        case 'SET_LOGOUT_CREDENTIALS': 
            initialState.credentials.username=""
            initialState.credentials.password=""
            break;
        
      default:
    }
    return newState;
};

export default reducer