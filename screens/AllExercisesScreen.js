import React from 'react'

import {View, Text, StyleSheet, Image, } from 'react-native'
import ExerciseCard from '../Components/ExerciseCard'




class AllExercisesScreen extends React.Component {

    render() {
        return (
            <View style={styles.cardContainer}>
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>
            </View>
        )
    }
}

export default AllExercisesScreen

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#37474F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
      width: 250,
      height: 250,
      marginBottom: 10,
      resizeMode: 'contain',
      borderColor: '#E91E63'


  },
});
