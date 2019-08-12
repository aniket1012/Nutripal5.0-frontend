import React from 'react'

import {View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import ExerciseCard from '../Components/ExerciseCard'


//connect to store and msp and mdp need to added

class AllExercisesScreen extends React.Component {

  // function to render each exercise card will go here and then function will go in the render, make sure to pass props to exercise card 

    render() {
        return (
        <ScrollView>
            <View style={styles.cardContainer}>
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>  
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>  
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>
               <ExerciseCard/>

            </View>
        </ScrollView>
        )
    }
}

export default AllExercisesScreen

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    // padding: 2,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  
});
