import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
 
export const Home = ({navigation}) => {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {user.username}! </Text>
      <Button
        title=" Go to Tours detail"
        onPress={() => navigation.navigate('Tours', {
          itemId: 86,
          otherParam: 'Akai',
        })}
      />
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
    fontSize: 25,
    color: '#334455',
  },
});