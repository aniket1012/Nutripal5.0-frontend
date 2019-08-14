import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';


class ExericseCard extends React.Component {


    render() {
  
    return (
        <View style={styles.card} >
            {/* <Text style={styles.title}> EXERCISE NAME DETAIL </Text> */}
            <Text style={styles.title}> {this.props.navigation.getParam('name')} </Text>
            <View style={styles.exerciseImageContainer}>
              <Image style={styles.exerciseImage} source={{uri: this.props.navigation.getParam('img_two')}} />
              <Image style={styles.exerciseImage} source={{uri: this.props.navigation.getParam('img_one')}} />
            </View>
            <View style={styles.exerciseInfoContainer}>
              <View style={styles.exerciseInfoLabel}>
                {/* <Text> LABEL </Text> */}
                <Text style={styles.labeltxt}>Main Muscle Targeted: </Text>
                <Text style={styles.labeltxt}>Equipment: </Text>
                <Text style={styles.labeltxt}>Category: </Text>
                <Text style={styles.labeltxt}>Instructions: </Text>
              </View>
              <View style={styles.exerciseInfo}>
                {/* <Text> INFO</Text> */}
                <Text style={styles.infotxt}> {this.props.navigation.getParam('muscle')} </Text>
                <Text style={styles.infotxt}> {this.props.navigation.getParam('equipment')} </Text>
                <Text style={styles.infotxt}> {this.props.navigation.getParam('category')} </Text>
                <ScrollView style={styles.exerciseInstructions}>
                   <Text style={styles.infotxt}>{this.props.navigation.getParam('instructions')} </Text>
                </ScrollView>
              </View>
            </View>
            <View style= {styles.btnContainer}>
              <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate('Exercises')}>
                  <Text style={styles.btnTxt}> Add To My Exercises</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate('Exercises')}>
                  <Text style={styles.btnTxt}> Back To All Exercises </Text>
              </TouchableOpacity>
            </View>
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
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    // padding: 5,
    
  },

  labeltxt: {
    fontSize: 15,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
  },
  
  infotxt: {
    fontSize: 12,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 1.5,
  },


  exerciseImageContainer: {
    flexDirection: 'row',  
    marginTop: 30,
    

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
    
    borderColor: 'black',
    borderWidth: 5,
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    padding: 5,
    
  },


  exerciseInfoLabel: {
    // flexDirection: 'row',
    // marginTop: 50,
    fontSize: 16,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    borderColor: 'black',
    borderWidth: 5,
    // flex: 1,

  },

  exerciseInfo: {
    // flexDirection: 'row',
    // marginTop: 50,
    fontSize: 16,
    // textAlign: "center",
    // width: '50%',
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    borderColor: 'black',
    borderWidth: 5,
    flex: 1,
    alignItems: 'flex-start',
    padding: 2,
  },

  exerciseInstructions: {
    borderColor: 'black',
    borderWidth: 2,
  },


  btnContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    
  },

  // addBtn: {
  //   backgroundColor: "#263238",
  //   // alignItems: 'stretch',
  //   flexDirection: 'column-reverse',
  //   paddingHorizontal: 10,
  //   width: "80%",
  //   marginBottom: 5,
  //   // flexWrap: 'wrap',
  //   borderRadius: 100,
  //   // padding: 1,
  // },

  backBtn: { 
    backgroundColor: "#263238",
    alignItems: 'center',
    // justifyContent: 'flex-end',
    paddingHorizontal: 10,
    width: "90%",
    marginBottom: 5,
    // flexWrap: 'wrap',
    borderRadius: 100,
    // padding: 1,

  },

  btnTxt: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    // padding: 5,
    
  },

});