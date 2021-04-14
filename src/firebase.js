import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAo5bhsD-7U6M-MkEn1IQ_3RUPGdQuQoa8",
    authDomain: "auth-development-cd57d.firebaseapp.com",
    projectId: "auth-development-cd57d",
    storageBucket: "auth-development-cd57d.appspot.com",
    messagingSenderId: "697795662781",
    appId: "1:697795662781:web:1e8a85a161d8068b79f8d4"
  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
export default app