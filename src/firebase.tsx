import * as firebase from "firebase"



//here the config of the firebase 

const firebaseConfig = {
  apiKey: "AIzaSyBaharqoEvguoQzjzdRG5FvhDydgyODy20",
  authDomain: "react-app-fff5a.firebaseapp.com",
  databaseURL: "https://react-app-fff5a.firebaseio.com",
  projectId: "react-app-fff5a",
  storageBucket: "react-app-fff5a.appspot.com",
  messagingSenderId: "809171885472",
  appId: "1:809171885472:web:79d59274113e3e5456d8c5",
  measurementId: "G-06DHGV7WDH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;