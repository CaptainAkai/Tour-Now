import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native"; 

export const ItemDetail = ( {navigation, route} ) => {
    const { tempItem } = route.params;
  return (
    <View style={{flex:1}}>
    
        <View style={{flex:1}}>

            <Image source={{uri:tempItem.image}} style={{width: '100%', height: '100%'}}></Image>

        </View>

        <View style={{flex:1}}>

            <Text style={{fontSize: 36, width:'100%', fontWeight: 'bold', textAlign: 'center', fontStyle: 'italic'}}>{tempItem.name}</Text>
            <Text style={{fontSize: 20, width:'100%', textAlign: 'right', fontStyle: 'italic', color: 'gray'}}>Price: {tempItem.price} </Text>
            <View style={{width: '90%', height: '90%',  margin: '5%'}}>
                <Text style={{fontSize: 24,}}>Discription: {tempItem.info}</Text>
            </View>

        </View>

    </View>
  );
};