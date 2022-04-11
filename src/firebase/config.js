import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
//import * as firebase from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCbdYnH3tGCkzVWN6fnvHhuPVs-Yx1pxfA",
  authDomain: "fir-ba3f9.firebaseapp.com",
  projectId: "fir-ba3f9",
  storageBucket: "fir-ba3f9.appspot.com",
  messagingSenderId: "951712696313",
  appId: "1:951712696313:web:b2a62863098a14c57f5f28",
  measurementId: "G-Y7YF30KWX0"
};

export default firebase.initializeApp(firebaseConfig);