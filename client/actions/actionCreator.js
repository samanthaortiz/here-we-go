//fire off actions 

//find info?

//actions are just objects

function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index //this is the indentifier for which 'post gets incremented'
  }
}

function addComment(postId, author, comment){
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

function removeComment(postId, index){
  return {
    type: 'REMOVE_COMMENT',
    index, 
    postId
  }
}

//dispatch with info about the action that happened
//BUT this does not update our state. 
//The reducer will do that.
function postExpedia(location, startDate, endDate){
  return {
    type: 'POST_EXPEDIA',
    location,
    startDate,
    endDate
  }
}