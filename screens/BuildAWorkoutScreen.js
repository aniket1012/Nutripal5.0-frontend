import React from 'react'

import {View, Text, StyleSheet, ScrollView} from 'react-native'

class BuildAWorkoutScreen extends React.Component {

    

    render() {
        return (
            
            <View style={styles.container}>
                <View style={styles.myExercises}>
                    <Text>
                        SELECT A WORKOUT
                    </Text>
                </View>
                <View style={styles.buildWorkout}>
                    <Text>
                        BUILD A WORKOUT
                    </Text>
                </View>
            </View>
        )
    }
}

export default BuildAWorkoutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },  

  myExercises: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buildWorkout: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
