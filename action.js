

function like() {
    return {type:"LIKE"}
}


function fetchExercises() {
    return function(dispatch) {
        fetch('http://10.9.111.244:3000/exercises')
        .then(resp => resp.json())
        .then(exercises => {
            dispatch({type: "FETCH_EXERCISES", payload: exercises})
        })
    }
}

function selectExercise(exercise, myExercises){
    return function(dispatch) {
        if (myExercises.length > 0){
            if (myExercises.find(myE => myE.id === exercise.id)){
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

function removeExercise(exercise, myExercises){
    return function(dispatch) {
       let filterdExercises= myExercises.filter(myE => {
           return myE.id !== exercise.id
        })
        dispatch({type: 'REMOVE_EXERCISE', payload: filterdExercises})
    }
}


function login(userLogin, navigation) {
    return function(dispatch) {
        return fetch(`http://10.9.111.244:3000/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                email: userLogin.email,
                password: userLogin.password
            })
        })
        .then(resp => resp.json())
        .then((user) => {
        if (user.errors) {
            alert(user.errors)
        } else {
            dispatch({
                type: "LOGIN",
                payload: user
            })
            navigation.navigate('Home')
        }
    })
    
    }
}

function createWorkout(userWorkout, navigation, myExercises) {
    console.log("FROM CREATE WORKOUT ACTION")
    return function(dispatch) {
        return fetch(`http://10.9.111.244:3000/workouts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                name: userWorkout.name,
                day: userWorkout.day,
                user_id: userWorkout.user_id
            })
        })
        .then(resp => resp.json())
        .then((workout) => {
            dispatch({type: "NEW_WORKOUT",payload: workout})
            dispatch({type: "EMPTY_MY_EXERCISES"})
            navigation.navigate('Home')
           return myExercises.forEach(myEx => {
              return  fetch(`http://10.9.111.244:3000/workout_exercises`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        exercise_id: myEx.id,
                        workout_id: workout.id
                    })
                })
            })
        })
    
            
    
    }
}

function removeWorkout(workout, userWorkouts) {
    return function(dispatch) {
         fetch(`http://10.9.111.244:3000/workouts/${workout.id}`, {
            method: "DELETE"
        })
        dispatch({type: 'REMOVE_WORKOUT', payload: workout})
        
          
      
    }
}





export {
    fetchExercises,
    selectExercise,
    removeExercise,
    login,
    createWorkout,
    removeWorkout
    
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