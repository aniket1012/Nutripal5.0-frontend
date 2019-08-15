import React from 'react'

import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Button, TouchableOpacity } from 'react-native'
import ExerciseCard from '../Components/ExerciseCard'

import { connect } from 'react-redux'

import { like, fetchExercises, selectExercise } from '../action'


class AllExercisesScreen extends React.Component {
 
  componentDidMount(){
    this.props.fetchExercises()
  }


  
  renderExercises() {
    return this.props.exercises.map(exercise => {
      return (
      <ExerciseCard key={exercise.id} exercise={exercise} navigation={this.props.navigation}> 
         <TouchableOpacity style={styles.counterBtn}  onPress={() => this.props.selectExercise(exercise,this.props.myExercises)}>
                <Text style={styles.btnTxt}> + </Text>
            </TouchableOpacity>
              <TouchableOpacity style={styles.counterBtn} onPress={() => this.props.navigation.navigate('ExerciseShow', exercise)}>
                <Text style={styles.btnTxt}>Details</Text>
            </TouchableOpacity>
       </ExerciseCard>
      )
    })
  }
  

  render() {
      return (
      <ScrollView>
          <View style={styles.cardContainer}>
            {this.renderExercises()}
          </View>
      </ScrollView>
      )
  }

}

function mapStateToProps(state) {
  return {
    likes: state.exercise.likes,
    exercises: state.exercise.exercises,
    myExercises: state.exercise.myExercises
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     upcount: () => {
//       dispatch(like())
//   }

// }



export default connect(mapStateToProps, {
  like,
  fetchExercises,
  selectExercise
})(AllExercisesScreen)



const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    // padding: 2,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
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

  btnTxt: {
    fontSize: 18,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 5,
    // margin: 5,
    
  },
  
});
