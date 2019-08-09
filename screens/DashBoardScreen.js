import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

class DashBoardScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    EXERCISE 
                </Text>
            </View>
        )
    }
}

export default DashBoardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
