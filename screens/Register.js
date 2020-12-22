import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import { AuthContext } from '../navigation/AuthProvider';
import { Kaede } from 'react-native-textinput-effects';

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const [rePass, setRePass] = useState('');

  chkPass = () => {

    if (String(password) == String(rePass)) {

      register(email, password);

    } else {

      ToastAndroid.show('Register fail!\npassword and re-password are unmatch.', ToastAndroid.SHORT);

    }

  }

  return (
    <View style={styles.container}>
      <Text style={{...styles.text, marginBottom: 18}}> Register Information </Text>

      <Kaede label={'Email'} inputPadding={16} style={{ width: '100%' }}
        onChangeText={userEmail => setEmail(userEmail)}
        keyboardType='email-address'
        value={email} />

      <Kaede label={'Password'} inputPadding={16} style={{ width: '100%', marginTop: 12 }}
        value={password} secureTextEntry={true}
        onChangeText={userPassword => setPassword(userPassword)} />

      <Kaede label={'Re-Password'} inputPadding={16} style={{ width: '100%', marginTop: 12 }}
        value={rePass} secureTextEntry={true}
        onChangeText={userPassword => setRePass(userPassword)} />

      <TouchableOpacity style={{
        width: '90%', height: 50, backgroundColor: '#8BA7CB', marginTop: 20,
        borderRadius: 7, justifyContent: 'center', alignItems: 'center'
      }}
        onPress={() => chkPass()}>

        <Text style={{ fontSize: 20, fontStyle: 'italic', color: 'white' }}> Signup </Text>

      </TouchableOpacity>

      <View style={{ flexDirection: 'row', bottom: 18, position: 'absolute' }}>

        <Text style={{ fontSize: 18 }}> Already have an account? </Text>

        <TouchableOpacity
          style={{  }}
          onPress={() => navigation.navigate('Login')} >

          <Text style={{ color: '#8BA7CB', fontSize: 18, textDecorationLine: 'underline' }}>Go to Login</Text>

        </TouchableOpacity>

      </View>

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
    fontSize: 24,
    marginBottom: 10
  },
  navButton: {
    marginTop: 15
  },
  text: {
    color: '#8BA7CB',
    fontSize: 36,
    marginBottom: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  },
});