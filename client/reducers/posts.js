//new reducer for every piece of state
//this includes posts and comments(this will vary for ours)
//each piece gets updated through each connecting reducer

//reducer takes in:
  //1: the action
  //2: (store) copy of current state

function posts(state = [], action){
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  return state;
}

export default posts