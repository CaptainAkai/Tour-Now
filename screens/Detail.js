import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, Dimensions, Image, Text, Alert, YellowBox } from 'react-native';
import Swipeout from 'react-native-swipeout'; //npm i --save react-native-swipeout
export const Detail = () => {
	const data = [
		{
			name: 'Ana Mandara',
			image: require('../Images/AnaMandara.jpg'),
			info: 2,
			price: '$2400'
		},
		{
			name: 'Princess',
			image: require('../Images/Princess.jpg'),
			info: 3,
			price: '$1800'
		},
		{
			name: 'Roma',
			image: require('../Images/Roma.jpg'),
			info: 5,
			price: '$2000'
		},
		{
			name: 'Blue Moon',
			image: require('../Images/BlueMoon.jpg'),
			info: 7,
			price: '$12000'
		},
		{
			name: 'Sheraton',
			image: require('../Images/Sheraton.jpg'),
			info: 5,
			price: '$1750'
		}
	];

	useEffect(() => {
		YellowBox.ignoreWarnings([ 'Setting a timer', 'Warning:' ]);
	}, []);

	return (
		<View style={styles.container}>
			<FlatList data={data} renderItem={({ item }) => <ListItem item={item} />} />
		</View>
	);
};
//Item FlatList function
const ListItem = (props) => {
	// Cau hinh swipeout
	const swipeoutSettings = {
		autoClose: true,
		onClose: () => {
			console.log('Close swipeout');
		},
		onOpen: () => {
			console.log('Open swipeout');
		},
		right: [
			{
				text: 'Update',
				type: 'secondary',
				onPress: () => {
					console.log('Update');
				}
			},
			{
				text: 'Delete',
				type: 'delete',
				onPress: () => {
					Alert.alert(
						'Warning:',
						'Are you want to delete?',
						[
							{ text: 'No', onPress: () => console.log('Cancel Delete'), type: 'cancel' },
							{ text: 'Yes', onPress: () => console.log('Delete') }
						],
						{ cancelable: true }
					);
				}
			}
		]
	};

	return (
		<Swipeout {...swipeoutSettings}>
			<View style={styles.listContainer}>
				<Image
					source={props.item.image}
					style={{ borderWidth: 1, borderColor: 'black', width: 60, height: 60 }}
				/>
				<View>
					<Text style={{ marginLeft: 10, fontSize: 20 }}>Name: {props.item.name}</Text>
					<Text style={{ marginLeft: 10 }}>Price: {props.item.price}</Text>
					<Text style={{ marginLeft: 10 }}>Info: {props.item.info}</Text>
				</View>
			</View>
		</Swipeout>
	);
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	listContainer: {
		backgroundColor: '#f1f1f1',
		flexDirection: 'row',
		margin: width * 3.6 / 187.5,
		padding: width * 3.6 / 187.5,
		borderRadius: width * 3.6 / 187.5
	}
});
