import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const sendText= async (phoneNumber)=>{
  console.log("PhoneNumber: ", phoneNumber);
  await fetch("https://dev.stedi.me/twofactorlogin/"+phoneNumber,{
    method: 'POST',
    headers:{
      'content-type':'application/text'
    }
  });
}

const getToken = async ({phoneNumber, oneTimePassword}) =>{
  const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    body:JSON.stringify({oneTimePassword, phoneNumber}),
    headers: {
      'content-type':'application/json'
    }
  })

  const tokenResponseString = await tokenResponse.text();
  
}


const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style = {styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder = "Phone Number"
        placeholderTextColor='#000'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{sendText(phoneNumber)}}
      >
        <Text>Send Text</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor='#000'
        keyboardType = "numeric"
        secureTextEntry = {true}
      />
      {/* <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          sendText({phoneNumber, oneTimePassword, setUserLoggedIn:clickProps.setUserLoggedIn});
        }}
      >
        <Text>Login</Text>

      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.setUserLoggedIn(true);
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin: {
    marginTop:100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default Login;