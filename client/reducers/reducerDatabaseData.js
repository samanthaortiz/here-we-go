const databaseData = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'GET_DB_DATA':
      return {
        databaseData: action.databaseData,

      }
      
    default:
      return state;
  }
}

export default databaseData
//this is the call to the database