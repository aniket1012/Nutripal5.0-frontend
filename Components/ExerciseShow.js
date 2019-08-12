import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';


class ExericseCard extends React.Component {


    render() {
    return (
        <View style={styles.card}>
            <Text style={styles.btnTxt}> EXERCISE DETAIL </Text>
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
    justifyContent: 'space-between',
    width: '45%',
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
    

   

    // height: '30%'
     

  },

  exerciseImage: {
      width: 130,
      height: 130,
    //   marginBottom: 10,
      // resizeMode: 'contain',
      borderWidth: 5,
      borderColor: 'black',
      borderRadius: 5,
      marginTop: 5,


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