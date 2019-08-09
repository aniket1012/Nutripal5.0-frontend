import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

class AllExercisesScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    ALL EXERCISES 
                </Text>
            </View>
        )
    }
}

export default AllExercisesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
