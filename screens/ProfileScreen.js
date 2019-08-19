import React from 'react'

import {View, Text, StyleSheet, Image} from 'react-native'

import {
    connect
} from 'react-redux'



class Profile extends React.Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.logo} source={{uri: 'https://cdn3.iconfinder.com/data/icons/outline-style-1/512/profile-512.png'}}/>
                        <Text style={styles.userName}> {this.props.user.name} </Text> 
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        Email: {this.props.user.email}
                    </Text>
                    <Text style={styles.infoText}>
                        Total Number of Workouts: {this.props.user.workouts.length}
                    </Text>
                </View>
            </View>
        )
    }
}
//END OF PROFILE 

function mapStateToProps(state) {
    return {
        user: state.user.currentUser,
        

    }
}

export default connect(mapStateToProps)(Profile)




const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  imgContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    width: '100%',
    backgroundColor: '#01579B',
    marginBottom: 5,
    borderRadius: 20,
    shadowOffset: {
            width: 5,
            height: 3
        },
        shadowColor: 'black',
        shadowOpacity: 0.6,
  },

  logo: {
    height: 150,
    width: 150,
    borderColor: 'black',
    borderWidth: 0.2,
    borderRadius: 75,
    padding: 5,
    backgroundColor: '#fff',
    
  },

  userName: {
    margin: 5,
    fontSize: 28,
    fontFamily: 'Avenir-Medium',
    color: '#fff',
    fontWeight: "bold",
    // textDecorationLine: 'underline',
  },

  infoContainer: {
    flex: 2,
    backgroundColor: '#01579B',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // borderWidth: 2,
    // borderColor: 'blue',
    width: '100%',
    borderRadius: 20,
    shadowOffset: {
            width: 5,
            height: 3
        },
        shadowColor: 'black',
        shadowOpacity: 0.6,

    padding: 15,
  },

  infoText: {
    fontSize: 22,
    fontFamily: 'Avenir-Medium',
    color: '#fff',
    fontWeight: "500",
    margin: 10
  }

});


