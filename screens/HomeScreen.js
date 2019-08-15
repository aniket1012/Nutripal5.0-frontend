import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

import {connect} from 'react-redux'

class HomeScreen extends React.Component {

    

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text>
                    Welcome {this.props.user.name}
                </Text>
            </View>
        )
    }
}
// END OF HOME SCREEN 

function mapStateToProps(state) {
    return {
        user: state.user.currentUser

    }
}

export default connect(mapStateToProps)(HomeScreen)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
