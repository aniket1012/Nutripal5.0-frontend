

function like() {
    return {type:"LIKE"}
}


function fetchExercises() {
    return function(dispatch) {
        fetch('http://10.9.109.240:3000/exercises')
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
        return fetch(`http://10.9.109.240:3000/login`, {
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
    // console.log("FROM CREATE WORKOUT ACTION")
    return function(dispatch) {
        return fetch(`http://10.9.109.240:3000/workouts`, {
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
         fetch(`http://10.9.109.240:3000/workouts/${workout.id}`, {
            method: "DELETE"
        })
        dispatch({type: 'REMOVE_WORKOUT', payload: workout})
        
          
      
    }
}

function createUser(newUser, navigation) {
    return function (dispatch) {
        fetch(`http://10.9.109.240:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                age: newUser.age,
                height: newUser.height,
                weight: newUser.weight,
                gender: newUser.gender,
                life_style: newUser.life_style
            })
        })
        .then(resp => resp.json())
        .then(newUser => {
            dispatch({type:"NEW_USER", payload: newUser})
            navigation.navigate('Home')
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