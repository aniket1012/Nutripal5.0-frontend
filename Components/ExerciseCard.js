import React from 'react';
import { StyleSheet, Text, View, Image,  } from 'react-native';

import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { like } from '../action'

class ExericseCard extends React.Component {


    render() {
      
    return (
        <View style={styles.card} >
            <Text style={styles.title}> {this.props.exercise.name} </Text>
            <Image style={styles.exerciseImage} source={{uri: this.props.exercise.tile}} />
            {/* <TouchableOpacity style={styles.counterBtn}  onPress={() => this.props.like()}>
                <Text style={styles.btnTxt}> + Add  {this.props.likes}</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.counterBtn} onPress={() => this.props.navigation.navigate('ExerciseShow')}>
                <Text style={styles.btnTxt}> details {this.props.likes}  </Text>
            </TouchableOpacity>
        </View>
        )
    }

}




function mapStateToProps(state) {
  return {
    likes: state.user.likes,
    exercises: state.user.exercises
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     upcount: () => {
//       dispatch(like())
//     }
//   }
// }



export default connect(mapStateToProps, {
  like,

})(ExericseCard)

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FF6D00',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '45%',
    // borderColor: 'black',
    // borderWidth: 4,
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
    

   

    // height: '30%'
     

  },

  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    // padding: 5,
    
  },

  exerciseImage: {
      width: 140,
      height: 140,
    //   marginBottom: 10,
      // resizeMode: 'contain',
      // borderWidth: 5,
      // borderColor: 'black',
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 10,
      // justifyContent: 'center',
      alignContent: 'center',


  },

  counterBtn: { 
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