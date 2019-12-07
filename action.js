

function like() {
    return {type:"LIKE"}
}


function fetchExercises() {
    return function(dispatch) {
        fetch('http://10.51.107.240:3000/exercises')
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
        return fetch(`http://10.51.107.240:3000/login`, {
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
   
    return function(dispatch) {
        console.log("FROM END OF CREATE WORKOUT ACTION", userWorkout)
        return fetch(`http://10.51.107.240:3000/workouts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                name: userWorkout.name,
                day: userWorkout.day,
                user_id: userWorkout.user_id,
                exercises: myExercises
            })
        })
        .then(resp => resp.json())
        .then((workout) => {
             console.log("FROM END OF CREATE WORKOUT ACTION", workout)
            dispatch({type: 'NEW_WORKOUT', payload: workout})
            // debugger
            dispatch({type: "EMPTY_MY_EXERCISES"})
            navigation.navigate('Home') 
        })
        
    }
   
}

// function emptyExercises() {
//     debugger
//      return {type: "EMPTY_MY_EXERCISES"}
// }

function removeWorkout(workout, userWorkouts) {
    return function(dispatch) {
         fetch(`http://10.51.107.240:3000/workouts/${workout.id}`, {
            method: "DELETE"
        })
        dispatch({type: 'REMOVE_WORKOUT', payload: workout})
        
          
      
    }
}

function createUser(newUser, navigation) {
    return function (dispatch) {
        fetch(`http://10.51.107.240:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
            })
        })
        .then(resp => resp.json())
        .then(newUser => {
            if (newUser.errors) {
                alert(newUser.errors)
            } else {
            dispatch({type:"NEW_USER", payload: newUser})
            navigation.navigate('Home')
            }
        })
    }
}

function updateUser(user, navigation, currentUser ) {
    return function(dispatch) {
        fetch(`http://10.51.107.240:3000/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            })
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.errors) {
                alert(user.errors)
            } else {
            dispatch({type: "LOGIN", payload: user})
            navigation.navigate('Profile')
            }
        })
    }
}




export {
    fetchExercises,
    selectExercise,
    removeExercise,
    login,
    createWorkout,
    removeWorkout,
    createUser,
    updateUser,
    
    
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