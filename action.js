
function like() {
    return {type:"LIKE"}
}

function fetchExercises(exercises) {
    return {type: "FETCH_EXERCISES", payload: exercises }
}


export {
    like,
    fetchExercises
}