

function like() {
    return {type:"LIKE"}
}


function fetchExercises() {
    return function(dispatch) {
        fetch('http://10.9.107.166:3000/exercises')
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
        console.log("Filtered Exercises", filterdExercises)
        dispatch({type: 'REMOVE_EXERCISE', payload: filterdExercises})
    }
}


function login(userLogin, navigation) {
    return function(dispatch) {
        return fetch(`http://10.9.107.166:3000/login`, {
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
            console.log(user)
            dispatch({
                type: "LOGIN",
                payload: user
            })
            navigation.navigate('Home')
        }
    })
    
    }
}
  


export {
    fetchExercises,
    selectExercise,
    removeExercise,
    login
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