import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import { Kaede } from 'react-native-textinput-effects';

export const Login = ({ navigation }) => {
  const { login, facebookLogIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Login Information </Text>

      <Kaede label={'Email'} inputPadding={16} style={{ width: '100%' }}
        onChangeText={userEmail => setEmail(userEmail)}
        keyboardType='email-address'
        value={email} />

      <Kaede label={'Password'} inputPadding={16} style={{ width: '100%', marginTop: 12 }}
        value={password} secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)} />

      <TouchableOpacity style={{
        width: '90%', height: 50, backgroundColor: '#8BA7CB', marginTop: 20,
        borderRadius: 7, justifyContent: 'center', alignItems: 'center'
      }}
        onPress={() => login(email, password)}>

        <Text style={{ fontSize: 20, fontStyle: 'italic', color: 'white' }}> Login </Text>

      </TouchableOpacity>

      <OR></OR>

      <TouchableOpacity style={{
        width: '90%', height: 50, backgroundColor: '#8BA7CB', marginTop: 12,
        borderRadius: 7, justifyContent: 'center', alignItems: 'center'
      }}
        onPress={() => facebookLogIn()}>

        <Text style={{ fontSize: 20, fontStyle: 'italic', color: 'white' }}> Login with Facebook </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Register')} >

        <Text style={styles.navButtonText}>Join with us?</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#8BA7CB',
    fontSize: 36,
    marginBottom: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 20,
    color: '#8BA7CB'
  }
});

const OR = () => {

  return (

    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>

      <View style={{ width: '30%', height: 2, backgroundColor: '#8BA7CB' }}></View>
      <Text style={{ color: '#8BA7CB', fontSize: 16 }}> OR </Text>
      <View style={{ width: '30%', height: 2, backgroundColor: '#8BA7CB' }}></View>

    </View>

  );

}