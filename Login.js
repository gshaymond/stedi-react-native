import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity} from "react-native";

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
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="1234"
        placeholderTextColor='#000'
        keyboardType = "numeric"
        swcureTestEntr = {true}
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
  }
});

export default Login;