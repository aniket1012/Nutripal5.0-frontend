const state = {
    exercises: [],
    myExercises: [],
}

const ExerciseReducer = (prevState = state, action) => {
    switch (action.type) {

        case "FETCH_EXERCISES": 
            return {...prevState, exercises: action.payload}

        case "SELECT_EXERCISE":
                return {...prevState, myExercises: [...prevState.myExercises, action.payload]}
        case "REMOVE_EXERCISE":
                return {...prevState, myExercises: action.payload }
        default:
            return prevState
    }

}
export default ExerciseReducer