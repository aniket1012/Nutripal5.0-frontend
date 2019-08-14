const state = {
    likes: 0,
    exercises: [],
    myExercises: [],
}

const UserReducer = (prevState = state, action) => {
    switch (action.type) {
        case "LIKE":
            return {...prevState, likes: prevState.likes + 1}

        case "FETCH_EXERCISES": 
            return {...prevState, exercises: action.payload}

        case "SELECT_EXERCISE":
                return {...prevState, myExercises: [...prevState.myExercises, action.payload]}

        default:
            return prevState
    }

}
export default UserReducer