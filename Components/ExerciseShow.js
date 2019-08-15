import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

import { selectExercise } from '../action'


class ExericseCard extends React.Component {

  state = {
    buildAWorkout: false 
  }

  

    render() {
  
    return (
        <View style={styles.card} >
            {/* <Text style={styles.title}> EXERCISE NAME DETAIL </Text> */}
            <Text style={styles.title}> {this.props.navigation.getParam('name')} </Text>
            <View style={styles.exerciseImageContainer}>
              <Image style={styles.exerciseImage} source={{uri: this.props.navigation.getParam('img_two')}} />
              <Image style={styles.exerciseImage} source={{uri: this.props.navigation.getParam('img_one')}} />
            </View>
            <ScrollView style={styles.exerciseInfoContainer}>
                <Text style={styles.labeltxt}>
                  Main Muscle Targeted :
                    <Text style={styles.infotext}>
                      {this.props.navigation.getParam('muscle')} 
                    </Text>
                </Text>
                <Text style={styles.labeltxt}>
                  Equipment :
                    <Text style={styles.infotext}>
                      {this.props.navigation.getParam('equipment')} 
                    </Text>
                </Text>
                <Text style={styles.labeltxt}>
                 Category :
                    <Text style={styles.infotext}>
                      {this.props.navigation.getParam('category')} 
                    </Text>
                </Text>
                <Text style={styles.labeltxt}>
                  Instructions :
                    <Text style={styles.infotext}>
                       {this.props.navigation.getParam('instructions')} 
                    </Text>
                </Text>
                
              {/* <View style={styles.exerciseInfoLabel}> */}
                {/* <Text> LABEL </Text> */}
                {/* <Text style={styles.labeltxt}>Main Muscle Targeted: </Text>
                <Text style={styles.labeltxt}>Equipment: </Text>
                <Text style={styles.labeltxt}>Category: </Text>
                <Text style={styles.labeltxt}>Instructions: </Text> */}
              {/* </View> */}
              {/* <View style={styles.exerciseInfo}> */}
                {/* <Text> INFO</Text> */}
                {/* <Text style={styles.infotxt}> {this.props.navigation.getParam('muscle')} </Text>
                <Text style={styles.infotxt}> {this.props.navigation.getParam('equipment')} </Text>
                <Text style={styles.infotxt}> {this.props.navigation.getParam('category')} </Text> */}
                {/* <ScrollView style={styles.exerciseInstructions}>
                   <Text style={styles.infotxt}>{this.props.navigation.getParam('instructions')} </Text>
                </ScrollView> */}
              {/* </View> */}
            </ScrollView>
            <View style= {styles.btnContainer}>
              <TouchableOpacity style={styles.backBtn} onPress={() => this.props.selectExercise(this.props.navigation.state.params,this.props.myExercises)}>
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
  // debugger
  return {
    myExercises: state.exercise.myExercises
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     upcount: () => {
//       dispatch({type:"LIKE"})}
//   }
// }



export default connect(mapStateToProps, {
  selectExercise
})(ExericseCard)

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
    fontSize: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    // textAlign: "center",
    alignContent: 'flex-end',
    color: "black",
    // fontWeight: "bold",
    fontFamily: "Avenir-Medium",
    justifyContent: 'flex-end',
  },
  
  infotext: {
  fontSize: 16,
  // textAlign: "right",
  color: "black",
  fontWeight: "800",
  fontFamily: "Avenir-Medium",
  padding: 2,

  },

  // infotxt: {
  //   fontSize: 12,
  //   // textAlign: "center",
  //   color: "#fff",
  //   // fontWeight: "700",
  //   fontFamily: "Avenir-Medium",
  //   padding: 1.5,
  // },


  exerciseImageContainer: {
    flexDirection: 'row',  
    marginTop: 30,
    

  },

  exerciseImage: {
      width: 140,
      height: 140,
      //   marginBottom: 10,
      // resizeMode: 'contain',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 10,
      // justifyContent: 'center',
      alignContent: 'center',
      margin: 20,
  
  },

  exerciseInfoContainer: {
    flexDirection: 'column',
    
    // borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    // flexWrap: 'wrap',
    width: '100%',
    padding: 5,
    margin: 5,
    
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