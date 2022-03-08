import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZfF0QAt1XVcHWz25RQsu9YsvuzVEXinQ",
    authDomain: "fir-todo-313ab.firebaseapp.com",
    projectId: "fir-todo-313ab",
    storageBucket: "fir-todo-313ab.appspot.com",
    messagingSenderId: "456428735549",
    appId: "1:456428735549:web:cc1436d469b3636e27ae54",
    measurementId: "G-HSWCWDTWZZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export default db;