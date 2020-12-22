import React, { useContext } from "react";
import { Button, Image, View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Detail } from "../screens/Detail";
import { Tours } from "../screens/Tours";
import { AuthContext } from "../navigation/AuthProvider";
import { ItemDetail } from '../screens/ItemDetail';
import { useNavigation } from '@react-navigation/native';
import { UserProfile } from "../screens/UserProfile";

function LogoTitle() {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user.username}</Text>
    </View>

  );
}

function UserImage() {

  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>

      <Image
        style={{ width: 50, height: 50, marginRight: 10, borderRadius: 25, borderWidth: 1.5, borderColor: '#8BA7CB' }}
        source={{ uri: user.image }}
      />

    </TouchableOpacity>
  )
}

//create a stack

const Stack = createStackNavigator();
export const AppStack = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName="Home">
      {/*<Stack.Screen name="Home" component={Home} options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => logout()}
                title="Logout"
                color="#334455"
              />
              
            ),
          }}/>*/}
      <Stack.Screen name="Tours" component={Tours} options={{
        headerTitle: 'iTravel',
        headerTitleStyle: {color: '#8BA7CB', fontSize: 24, fontWeight: 'bold', textDecorationLine: 'underline', fontStyle: 'italic'},
        headerRight: props => <UserImage {...props} />,
          
        
      }} />

      <Stack.Screen name="ItemDetail" component={ItemDetail} options={{
        headerTitle: false


      }} />

      <Stack.Screen name="UserProfile" component={UserProfile} options={{
        
        headerShown: false

      }} />

    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

  },
  text: {
    fontSize: 20,
    color: '#334455',
  },
})