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
  KeyboardAvoidingView,
  DatePickerIOS
} from 'react-native'

import { connect } from 'react-redux'
import ExerciseCard from '../Components/ExerciseCard';

import {
  removeExercise,
  createWorkout,
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
      workoutDay: ""
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
      console.log(this.state.workoutDay)
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
            {/* <DatePickerIOS
            style={styles.datePicker}
            date={this.state.workoutDay}
            onDateChange={(text) => this.handleChange(text, 'day')}
            mode= 'date'
            placeholder="Select start time"
            >
            </DatePickerIOS> */}
            {/* <DatePickerIOS
            style={styles.datePicker}
            date={this.state.workoutDay}
            onDateChange={(text) => this.handleChange(text, 'day')}
            mode= 'date'
            placeholder="Select start time"
            >
            </DatePickerIOS> */}
            <TextInput 
                  value={this.state.workoutDay}
                  style={styles.input} 
                  placeholder="Day"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  onChangeText = {
                      (text) => this.handleChange(text, 'day')}
            />
            <TouchableOpacity style={styles.sbmtBtn} onPress={() => this.handleSubmit()}>
                <Text style={styles.btnTxt}>Create Workout</Text>
            </TouchableOpacity>
            </View>
          
          <View style={styles.scrollContainer}>
            <ScrollView> 
              <View style={styles.cardContainer}>
                {this.renderMyExercises()}
              </View>
            </ScrollView>
          </View>
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
})(BuildAWorkoutScreen)




const styles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'column',
    // margin: 10,
  },
  
  cardContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    // padding: 2,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'black',
  },

  scrollContainer: {
    backgroundColor: '#37474F',
    // height: '77%'
  },

  inputContainer: {
    backgroundColor: '#37474F',
    alignItems: 'center',
    height:'50%',
    borderWidth: 2,
    borderColor: 'black',
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

  datePicker: {
    // flex: 2,
    // borderColor: 'white',
    // borderWidth: 1,
    // height: '50%',
    width: '100%',
    textDecorationColor: 'white',
    backgroundColor: '#37474F',
    
  },

    


  sbmtBtn: { 
    backgroundColor: "#263238",
    // paddingVertical: 10,
    width: "30%",
    // marginBottom: 15,
    borderRadius: 30,
    padding: 10,
    margin: 5,
    alignItems: 'center'
    

  },

  btnTxt: {
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    
  },

  counterBtn: { 
    backgroundColor: "#263238",
    // margin: 5,
    // textAlign: 'center',
    // alignItems: 'baseline',
    // justifyContent: 'fle',
    // paddingHorizontal: 10,
    // width: "30%",
    // marginBottom: 5,
    borderRadius: 200,
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',

    

  },

  minusBtnTxt: {
    fontSize: 18,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 5,
    // margin: 5,
    
  },
 

});
