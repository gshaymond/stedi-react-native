import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native";

const sendText= async (phoneNumbe)=>{
  console.log("PhoneNumber: ", phoneNumber);
  await fetch("https://dev.stedi.me/twofactorlogin/"+phoneNumber,{
    mothod: 'POST',
    headers:{
      'content-type':'application/text'
    }
  });
}


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style = {styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder = "801-386-6640"
        placeholderTextColor='#000'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{console.log("Text has been sent.")}}
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
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{console.log("Login buttom was clicked")}}
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