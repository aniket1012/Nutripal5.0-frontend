import React from 'react'

import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Button, TouchableOpacity } from 'react-native'
import ExerciseCard from '../Components/ExerciseCard'

import { connect } from 'react-redux'

import { like, fetchExercises } from '../action'


class AllExercisesScreen extends React.Component {
 
  componentDidMount(){
    this.props.fetchExercises()
  }


  
  renderExercises() {
    return this.props.exercises.map(exercise => {
      return <ExerciseCard key={exercise.id} exercise={exercise} navigation={this.props.navigation}/>
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
    likes: state.user.likes,
    exercises: state.user.exercises
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
  fetchExercises
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

  
});
