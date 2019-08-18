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

import { login } from '../action'





const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class LoginScreen extends React.Component {

  state = {
    userEmail: "",
    userPassword: "",

  }

  handleChange(text, field) {
    if(field === 'email') {
      this.setState({userEmail: text})
    } else if(field === 'password')
    this.setState({userPassword: text})
  }

  handleSubmit() {
    userLogin = {
      email: this.state.userEmail,
      password: this.state.userPassword
    }
    this.props.login(userLogin, this.props.navigation)
    this.setState({
      userEmail: "",
      userPassword: ""
    })
  }
  
  
    static navigationOptions = {
      title: "Login"
    }



    render() {
        return (
        <DismissKeyboard>
        <KeyboardAvoidingView behavior="padding" style={styles.container}> 
                <StatusBar barStyle="light-content"/>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={{uri: 'https://np.technology/img/NP-Small-Square-Trans-White.png'}}/>
                    <Text style={styles.title}>NutriPal </Text> 
                </View> 

                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} 
                    value={this.state.userEmail}
                    placeholder="Email " 
                    placeholderTextColor="rgba(255,255,255,0.7)" 
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => this.handleChange(text, 'email')}
                    />
                    <TextInput style={styles.input} 
                    value={this.state.userPassword}
                    placeholder="Password" 
                    secureTextEntry 
                    placeholderTextColor="rgba(255,255,255,0.7)" 
                    returnKeyType="done" 
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(text) => this.handleChange(text, 'password')}
                    />
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity 
                    style={styles.userBtn} 
                    onPress={() => this.handleSubmit()}
                    >
                        <Text style={styles.btnTxt}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.userBtn} 
                    onPress={() => this.props.navigation.navigate('Welcome')}
                    >
                        <Text style={styles.btnTxt}>Back </Text>
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
    user: state.user.currentUser
    
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     upcount: () => {
//       dispatch({type:"LIKE"})}
//   }
// }



export default connect(mapStateToProps, {
  login
})(LoginScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F5476",
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
    backgroundColor: "#213B53",
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