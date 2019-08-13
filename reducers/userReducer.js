const state = {
    likes: 0,
    exercises: [],
}

const UserReducer = (prevState = state, action) => {
    switch (action.type) {
        case "LIKE":
            return {...prevState, likes: prevState.likes + 1}

        case "FETCH_EXERCISES": 
            return {...prevState, exercises: action.payload}
            
        default:
            return prevState
    }

}
export default UserReducer