import * as firebase from 'firebase'; // npm i --save firebase

var Config = {
    apiKey: "AIzaSyAFXik6hYNaFzevihkQf_79im07MfDXUoY",
    authDomain: "mob306-ps10574.firebaseapp.com",
    databaseURL: "https://mob306-ps10574.firebaseio.com",
    projectId: "mob306-ps10574",
    storageBucket: "mob306-ps10574.appspot.com",
    messagingSenderId: "675551437521",
    appId: "1:675551437521:web:4c7c96cbf994e263cd9bf0",
    measurementId: "G-X8HF2TC8FF"
};
  
export default (firebaseConfig = firebase.initializeApp(Config));