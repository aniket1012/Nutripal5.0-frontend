const state = {
   currentUser: null,
   
}

const UserReducer = (prevState = state, action) => {
    switch (action.type) {
        case "LOGIN": 
            return {...prevState, currentUser: action.payload}

        
        default:
            return prevState
    }

}
export default UserReducer