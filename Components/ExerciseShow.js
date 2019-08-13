import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';


class ExericseCard extends React.Component {


    render() {
    return (
        <View style={styles.card} >
            <Text style={styles.title}> EXERCISE NAME DETAIL </Text>
            <View style={styles.exerciseImageContainer}>
              <Image style={styles.exerciseImage} source="https://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Male/m/360_1.jpg" />
              <Image style={styles.exerciseImage} source="https://www.bodybuilding.com/exercises/exerciseImages/sequences/360/Male/m/360_2.jpg" />
            </View>
            <View style={styles.exerciseInfoContainer}>
              <View style={styles.exerciseInfoLabels}>
                <Text> LABEL </Text>
              </View>
              <View style={styles.exerciseInfo}>
                <Text> INFO</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate('Exercises')}>
                <Text style={styles.btnTxt}> details {this.props.likes}  </Text>
            </TouchableOpacity>
        </View>
        )
    }

}




function mapStateToProps(state) {
  return {
    likes: state.user.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upcount: () => {
      dispatch({type:"LIKE"})}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ExericseCard)

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FF6D00',
    // flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // width: '45%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 20,
    padding: 5,
    // marginTop: 15,
    

   

    // height: '30%'
     

  },

  title: {
    fontSize: 30,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    // padding: 5,

  },


  exerciseImageContainer: {
    flexDirection: 'row',
    marginTop: 50,

  },

  exerciseImage: {
      width: 140,
      height: 140,
      //   marginBottom: 10,
      // resizeMode: 'contain',
      borderWidth: 5,
      borderColor: 'black',
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 10,
      // justifyContent: 'center',
      alignContent: 'center',
      margin: 20,
  
  },

  exerciseInfoContainer: {
    flexDirection: 'row',
  },

  exerciseInfoLabel: {
    // flexDirection: 'row',
    // marginTop: 50,
    fontSize: 16,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",

  },

  exerciseInfo: {
    // flexDirection: 'row',
    // marginTop: 50,
    fontSize: 16,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
  },


  backBtn: { 
    backgroundColor: "#263238",
    // alignItems: 'baseline',
    // justifyContent: 'flex-end',
    paddingHorizontal: 10,
    width: "80%",
    marginBottom: 5,
  
    borderRadius: 100,
    // padding: 1,

  },

  btnTxt: {
    fontSize: 16,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    // padding: 5,
    
  },

});