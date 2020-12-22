import * as React from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import Icon from "react-native-vector-icons/Ionicons"

export const UserProfile = ({ navigation }) => {

    const { user, logout } = React.useContext(AuthContext);

    return (

        <View style={{ flex: 1, backgroundColor: '#fff'}}>

            <View style={{flex: 0.4, justifyContent: 'center', backgroundColor: '#8BA7CB' }}>
            
                <TouchableOpacity style={{width: '100%', flexDirection: 'row'}} onPress={() => navigation.goBack()}>
                
                    <Icon name={'ios-arrow-back'} color={'#fff'} size={28} style={{marginLeft: 20, alignSelf: 'center'}}></Icon>

                    <Text style={{ fontSize: 24, textAlign: 'center', width:'100%', position:'absolute', fontWeight: 'bold',
                                    textDecorationLine: 'underline', fontStyle: 'italic' }}> {user.name} </Text>
                    
                </TouchableOpacity>

            </View>

            <View style={{ flex: 1, backgroundColor: '#8BA7CB', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>

                <Image style={{ width: 200, height: 200, borderRadius: 100, borderColor: '#334455', borderWidth: 2,
                        marginLeft: '25%', marginTop: '4%'}} source={{ uri: user.image }}></Image>

            </View>

            <View style={{ flex: 2, backgroundColor: '#fff', width: '90%', height: '90%', marginLeft: '5%'}}>

                <Text style={ {marginTop: '10%' , ...styles.title }}> Gender: </Text>
                <Text style={styles.data}>{user.gender}</Text>
                <Text style={styles.title}> Email: </Text>
                <Text style={styles.data}>{user.email}</Text>
                <Text style={styles.title}> Birthday: </Text>
                <Text style={styles.data}>{user.birthday}</Text>

                <TouchableOpacity style={{width: '100%', height: 50, backgroundColor: '#8BA7CB',bottom: 18, position: 'absolute',
                                    borderRadius: 7, justifyContent: 'center', alignItems: 'center'}}
                                    onPress={() => logout()}>

                    <Text style={{ fontSize: 20, fontStyle: 'italic', color: 'white' }}>Log out</Text>
                
                </TouchableOpacity>

            </View>

        </View>
    );

};

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '2%',
        marginBottom: '2%',
        textDecorationLine: 'underline'
    },

    data: {
        fontSize: 18,
        fontStyle: 'italic',
        marginLeft: '10%',
        marginBottom: '2%'
    }

})