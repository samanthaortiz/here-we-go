const reducerLogin = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'GET_LOGIN':
      return {
        loginData: action.loginData,
      }
    default:
      return state;
  }
};

export default reducerLogin;
//this is the api call