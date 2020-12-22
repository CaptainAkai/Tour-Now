import React, { useState, createContext } from 'react';
import firebaseConfig from '../firebase/firebase.js';
import { ToastAndroid } from 'react-native';
import * as firebase from 'firebase';
const Social = require('../modules/Socials');

export const AuthContext = createContext({
	user: null,
	login: () => {},
	logout: () => {},
	register: () => {},
	facebookLogIn: () => {},
	facebookLogOut: () => {},
});

export const AuthProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	return (
		<AuthContext.Provider
			value={{
				user,
				login: async (email, password) => {
					await firebase
						.auth()
						.signInWithEmailAndPassword(email, password)
						.then((user) => {
							// If you need to do anything with the user, do it here
							setUser({ 
								username: email,
								image: 'https://reactjs.org/logo-og.png',
							});
							console.log('Login success!');
							ToastAndroid.show('Login success!', ToastAndroid.SHORT);
						})
						.catch((error) => {
							const { code, message } = error;
							console.log('Error: ' + message);
							ToastAndroid.show('Login fail!', ToastAndroid.SHORT);
						});
				},
				register: async (email, password) => {
					await firebase
						.auth()
						.createUserWithEmailAndPassword(email, password)
						.then((user) => {
							console.log('Register success!');
							ToastAndroid.show('Register success!', ToastAndroid.SHORT);
						})
						.catch((error) => {
							const { code, message } = error;
							console.log('Error: ' + message);
							ToastAndroid.show('Register fail!', ToastAndroid.SHORT);
						});
				},
				logout: async () => {
					setUser(null);
					ToastAndroid.show('Logout!', ToastAndroid.SHORT);
				},

				facebookLogIn: async () => {
					const token = await Social.loginFacebook('544908576186788'); // Done
			
					if (token !== null) {
						// Get the user's name using Facebook's Graph API
						fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500),gender,birthday`) // OK
							.then((response) => response.json())
							.then((data) => {
								const user = {
									name: data.name,
									image: data.picture.data.url,
									email: data.email,
									gender: data.gender,
									birthday: data.birthday
								};
								setUser(user);
							})
							.catch((e) => console.log(e));
					}
				},
				facebookLogOut: () => {
					setIsFaceBook(false);
					setUserData({
						name: 'Guest',
						image: imageGuest
					});
					setImageLoadStatus(false);
				},

			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
