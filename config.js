import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCfsW7IF_83qDeiQs6OUIHs7z_tIc6ahu0",
    authDomain: "crewpic-88195.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/u/0/project/crewpic-88195/database/crewpic-88195-default-rtdb/data/~2F",
    projectId: "crewpic-88195",
    storageBucket: "crewpic-88195.appspot.com",
    messagingSenderId: "674275991132",
    appId: "1:674275991132:web:050691520fcb86747d9099"
};

let app = firebase.initializeApp(firebaseConfig);

export default app.database();