import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,

} from 'react-native'

import {connect} from 'react-redux'





const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class LoginScreen extends React.Component {
    static navigationOptions = {
      title: "Login"
    }


    render() {
      // console.log(this.props)
        return (
        <DismissKeyboard>
        <KeyboardAvoidingView behavior="padding" style={styles.container}> 
                <StatusBar barStyle="light-content"/>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={{uri: 'https://np.technology/img/NP-Small-Square-Trans-White.png'}}/>
                    <Text style={styles.title}>NutriPal {this.props.likes}</Text> 
                </View> 

                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} 
                    placeholder="UserName or Email" 
                    placeholderTextColor="rgba(255,255,255,0.7)" 
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    />
                    <TextInput style={styles.input} 
                    placeholder="PassWord" 
                    secureTextEntry 
                    placeholderTextColor="rgba(255,255,255,0.7)" 
                    returnKeyType="go" 
                    ref={(input) => this.passwordInput = input}
                    />
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity 
                    style={styles.userBtn} 
                    onPress={() => this.props.navigation.navigate('DashBoard')}
                    >
                        <Text style={styles.btnTxt}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.userBtn} 
                    onPress={() => this.props.upcount()}
                    >
                        <Text style={styles.btnTxt}>Back to Welcome</Text>
                    </TouchableOpacity>
                </View> 
        </KeyboardAvoidingView>
        </DismissKeyboard>
        )
    }
}// END OF THE LOGIN COMPONENT 


//READING FROM DEFAULT STATE 
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



export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#37474F",
    flex: 1,
    // justifyContent: 'center',
    // alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    // textAlign: 'center',
    // margin: 10,
    // color: '#fff',
    // fontFamily: "Papyrus",
    
    // fontFamily: ""
  },

 
  logo: {
    width: 150,
    height:150,

  },

  title: {
    color: "#fff",
    marginTop: 10,
    width: 190,
    textAlign: "center",
    opacity: 0.9,
    fontSize: 50,
    fontFamily: "Avenir-Medium",
   

  },

   inputContainer: {
       padding: 15,
   },


  input: {
    // width: "90%",
    // backgroundColor: '#fff',
    // padding: 10,
    // borderColor: "black",
    // marginBottom: 10,

    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 25,


  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
   
  },

  userBtn: { 
    backgroundColor: "#263238",
    paddingVertical: 15,
    width: "45%",
    marginBottom: 25,
    borderRadius: 30,

  },

  btnTxt: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    
  },

  


  
});