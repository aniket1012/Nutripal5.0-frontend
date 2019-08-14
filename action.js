

function like() {
    return {type:"LIKE"}
}

// function fetchExercises(exercises) {
//     return {type: "FETCH_EXERCISES", payload: exercises }
// }

function fetchExercises() {
    return function(dispatch) {
        fetch('http://10.9.109.144:3000/exercises')
        .then(resp => resp.json())
        .then(exercises => {
            dispatch({type: "FETCH_EXERCISES", payload: exercises})
        })
    }
}

function selectExercise(exercise, myExercises){
    return function(dispatch) {
        if (myExercises.length > 0){
            if (myExercises.includes(exercise)){
                alert("Exercise Already Added")
            }else{
                dispatch({
                    type: "SELECT_EXERCISE",
                    payload: exercise
                })
            }
        } else {
            
            dispatch({type: "SELECT_EXERCISE", payload: exercise})
        }
        
    }
}


  


export {
    like,
    fetchExercises,
    selectExercise
}




//TEMPLATE FOR FETCHES 

// function template(args){
//     return function(dispatch) {
        // fetch(``)
        // .then(resp => resp.json())
        // .then(data => {
        //     dispatch()
        // })
        
//     }
// }