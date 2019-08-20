import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  DatePickerIOS,
  Picker
} from 'react-native'

import DateTimePicker from "react-native-modal-datetime-picker"

import { connect } from 'react-redux'
import ExerciseCard from '../Components/ExerciseCard';

import {
  removeExercise,
  createWorkout,
  emptyExercises,
} from '../action'



const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class BuildAWorkoutScreen extends React.Component {



  state = {
    workoutName: "",
    workoutDay: new Date(),

  }

  handleChange(text, field) {
    if(field === 'name') {
      this.setState({workoutName: text})
    } else if(field === 'day')
    this.setState({workoutDay: text})
  }

  handleSubmit() {
    userWorkout = {
      name: this.state.workoutName,
      day: this.state.workoutDay,
      user_id: this.props.user.id
    }
    this.props.createWorkout(userWorkout, this.props.navigation, this.props.myExercises)
    this.setState({
      workoutName: "",
      workoutDay: new Date()
    })
  
  }

    renderMyExercises() {


      return this.props.myExercises.map(exercise => {
       return (
        <ExerciseCard key={exercise.id} exercise={exercise} navigation={this.props.navigation}>
          <TouchableOpacity style={styles.counterBtn}  onPress={() => this.props.removeExercise(exercise,this.props.myExercises)}>
                <Text style={styles.minusBtnTxt}> − </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.counterBtn} onPress={() => this.props.navigation.navigate('ExerciseShow',exercise)}>
                <Text style={styles.minusBtnTxt}>Details</Text>
            </TouchableOpacity> */}
        </ExerciseCard>
        )
      })
    }

    

  

    render() {
      // console.log(this.props.myExercises)
        return (
        <DismissKeyboard>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}> 
            <TextInput 
                  value={this.state.workoutName}
                  style={styles.input} 
                  placeholder="Name Your Workout"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  onChangeText={(text) => this.handleChange(text, 'name')}
            />
            <DatePickerIOS
            initialDate={this.state.workoutDay}
            style={styles.picker}
            date={this.state.workoutDay}
            onDateChange={(text) => this.handleChange(text, 'day')}
            mode= 'date'
            placeholder="Select start time"
            >
            </DatePickerIOS>
            <TouchableOpacity style={styles.sbmtBtn} onPress={() => this.handleSubmit()}>
                <Text style={styles.btnTxt}>Create Workout</Text>
            </TouchableOpacity>
            </View>
            <ScrollView> 
              <View style={styles.cardContainer}>
                {this.renderMyExercises()}
              </View>
            </ScrollView>
        </View>
        </DismissKeyboard>

        )
    }
}

  
 function mapStateToProps(state) {
   return {
     myExercises: state.exercise.myExercises,
     user: state.user.currentUser
   }
 }

 // function mapDispatchToProps(dispatch) {
 //   return {
 //     upcount: () => {
 //       dispatch(like())
 //   }

 // }
      

export default connect(mapStateToProps,{
  removeExercise,
  createWorkout,
  emptyExercises,
})(BuildAWorkoutScreen)




const styles = StyleSheet.create({

  mainContainer: {
    // flexDirection: 'column',
    // backgroundColor: 'blue',
    // margin: 10,
    flex: 3,
  },
  
  cardContainer: {
    // flex: 1,
    // backgroundColor: '#fff',
    // flexDirection: 'row',
    // width: '100%',
    // height: '100%',
    // flexWrap: 'wrap',
    // padding: 2,
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // borderWidth: 2,
    // borderColor: 'black',
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  

  inputContainer: {
    // flex: 1,
    // margin: 1,
    backgroundColor: '#01579B',
    alignItems: 'center',
    width: '100%',
    // borderWidth: 2,
    // borderColor: 'black',
    shadowOffset: {
        width: 5,
        height: 3
      },
      shadowColor: 'black',
      shadowOpacity: 0.6,
      
  },

  input: {
    width: "80%",
    // backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    // borderColor: "black",
    // marginRight: 1,
    // height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    // marginHorizontal: 10,
    color: "#fff",
    
  
    borderRadius: 20,
    


  },

  // datePicker: {
  //   // flex: 2,
  //   // borderColor: 'white',
  //   // borderWidth: 1,
  //   // height: '50%',
  //   width: '100%',
  //   textDecorationColor: 'white',
  //   backgroundColor: '#37474F',
    
  // },

    


  sbmtBtn: { 
    backgroundColor: "#fff",
    // paddingVertical: 10,
    width: "30%",
    // marginBottom: 15,
    borderRadius: 30,
    padding: 10,
    margin: 10,
    alignItems: 'center'
    

  },

  btnTxt: {
    fontSize: 12,
    textAlign: "center",
    color: "#243B58",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    
  },

  counterBtn: { 
    backgroundColor: "#fff",
    // margin: 5,
    // textAlign: 'center',
    // alignItems: 'baseline',
    // justifyContent: 'fle',
    // paddingHorizontal: 10,
    // width: "30%",
    // marginBottom: 5,
    borderRadius: 200,
    padding: 5,
    shadowOffset: {width: 10, height: 5}, 
    shadowColor: 'black', 
    shadowOpacity: 0.4
    // borderWidth: 1,
    // borderColor: 'black',

    

  },

  minusBtnTxt: {
    fontSize: 16,
    // textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 5,
    // margin: 5,
    
  },
  
  picker: {
    // borderWidth: 1,
    // padding: 2,
    // borderColor: 'red',
    width: '80%',
    // color: 'white'
  }
 

});
