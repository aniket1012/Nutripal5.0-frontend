import React from 'react'

import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native'

import { connect } from 'react-redux'
import ExerciseCard from '../Components/ExerciseCard';

import { removeExercise } from '../action'

class BuildAWorkoutScreen extends React.Component {

    renderMyExercises() {
      return this.props.myExercises.map(exercise => {
       return (
        <ExerciseCard key={exercise.id} exercise={exercise} navigation={this.props.navigation}>
          <TouchableOpacity style={styles.counterBtn}  onPress={() => this.props.removeExercise(exercise,this.props.myExercises)}>
                <Text style={styles.minusBtnTxt}> − </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.counterBtn} onPress={() => this.props.navigation.navigate('ExerciseShow',exercise)}>
                <Text style={styles.minusBtnTxt}>Details</Text>
            </TouchableOpacity>
        </ExerciseCard>
        )
      })
    }

  

    render() {
      // console.log(this.props.myExercises)
      // console.log(this.props.removeExercise)
        return (
        <View>
          <View style={styles.scrollContainer}>
            <ScrollView> 
              <View style={styles.cardContainer}>
                {this.renderMyExercises()}
              </View>
            </ScrollView>
          </View>
          <View style={styles.inputContainer}> 
            <TextInput 
                  style={styles.input} 
                  placeholder="Name Your Workout"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
            />
            <TextInput 
                  style={styles.input} 
                  placeholder="Day"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
            />
            <TouchableOpacity style={styles.sbmtBtn} onPress={() => alert("Login Works")} onPress={() => this.props.navigation.navigate('DashBoard')}>
                <Text style={styles.btnTxt}>Create Workout</Text>
            </TouchableOpacity>
          </View>
        </View>

        )
    }
}

  
 function mapStateToProps(state) {
   return {
     myExercises: state.exercise.myExercises
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
})(BuildAWorkoutScreen)




const styles = StyleSheet.create({
  
  cardContainer: {
    // flex: 1,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    width: '100%',
    // height: '100%',
    flexWrap: 'wrap',
    // padding: 2,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  scrollContainer: {
    backgroundColor: '#37474F',
    height: '77%'
  },

  inputContainer: {
    backgroundColor: '#37474F',
    padding: 10,
    flexDirection: 'column',
    justifyContent:'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderTopColor: '#263238'
  },

  input: {
    width: "80%",
    // backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    // borderColor: "black",
    // marginRight: 1,
    // height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    // marginHorizontal: 10,
    color: "#fff",
    
  
    borderRadius: 20,
    


  },
    


  sbmtBtn: { 
    backgroundColor: "#263238",
    // paddingVertical: 10,
    width: "50%",
    // marginBottom: 15,
    borderRadius: 30,
    padding: 10,
    margin: 5,
    

  },

  btnTxt: {
    fontSize: 16,
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
