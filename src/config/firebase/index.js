import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"


const firebaseConfig = {
    apiKey: "AIzaSyAYfQVIcvlSa4hYQDbqVf6otWs21Dbvaeg",
    authDomain: "ruangan-fsm.firebaseapp.com",
    projectId: "ruangan-fsm",
    storageBucket: "ruangan-fsm.appspot.com",
    messagingSenderId: "584509496631",
    appId: "1:584509496631:web:b7ec07832c606fc9724eb2",
};
firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth()
export const firestore = firebase.firestore()
export const realtime = firebase.database()

export default firebase
