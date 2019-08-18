const state = {
   currentUser: null,
   userWorkouts: [],
  
   
}

const UserReducer = (prevState = state, action) => {

    switch (action.type) {
        case "LOGIN": 
            return {...prevState, currentUser: action.payload, userWorkouts: action.payload.workouts}

        case "NEW_USER":
            return{...prevState, currentUser: action.payload, userWorkouts: action.payload.workouts}
        
        case "NEW_WORKOUT": 
        return {...prevState, userWorkouts: [...prevState.userWorkouts, action.payload]}

        case "REMOVE_WORKOUT":
            let filterdWorkouts = prevState.userWorkouts.filter(myW => myW.id !== action.payload.id)
            return {...prevState, userWorkouts: filterdWorkouts}

        
        default:
            return prevState
    }

}
export default UserReducer