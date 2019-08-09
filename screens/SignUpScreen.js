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
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,

} from 'react-native'

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class SignUpScreen extends React.Component {
     static navigationOptions = {
        title: "Sign Up"
    }


    render() {
        return (
    
        <DismissKeyboard>
        <KeyboardAvoidingView behavior="padding" style={styles.container}> 
        {/* <StatusBar barStyle="light-content"/> */}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={{uri: 'https://np.technology/img/NP-Small-Square-Trans-White.png'}}/>
                <Text style={styles.title}>NutriPal</Text> 
            </View>
            <View style={styles.inputContainer}> 
                <TextInput 
                style={styles.input} 
                placeholder="UserName"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                />
                <TextInput 
                style={styles.input} 
                placeholder="Email"
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                />
                <TextInput 
                style={styles.input} 
                placeholder="PassWord" 
                returnKeyType="next" 
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry 
                />
                <TextInput 
                style={styles.input} 
                placeholder="Age"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                />
                <TextInput 
                style={styles.input} 
                placeholder="Height"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                />
                <TextInput 
                style={styles.input} 
                placeholder="Weight"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                />
                <TextInput 
                style={styles.input} 
                placeholder="Life Style" 
                returnKeyType="go"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)" 
                />
            </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.userBtn} onPress={() => alert("Login Works")} onPress={() => this.props.navigation.navigate('DashBoard')}>
                <Text style={styles.btnTxt}>Create Account</Text>
            </TouchableOpacity>
        </View> 
      </KeyboardAvoidingView>
      </DismissKeyboard>
      
        )
    }
}

export default SignUpScreen



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
    width: 100,
    height:100,

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
       marginBottom: 10,
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