import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"


const firebaseConfig = {
    apiKey: "AIzaSyBa31RWd9r9uhhfkgTDagANG3AVbu0kC9I",
    authDomain: "fsm-crud.firebaseapp.com",
    projectId: "fsm-crud",
    storageBucket: "fsm-crud.appspot.com",
    messagingSenderId: "3000132227",
    appId: "1:3000132227:web:c0263fd51d06975bab31b6"
};
firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth()
export const firestore = firebase.firestore()
export const realtime = firebase.database()

export default firebase
