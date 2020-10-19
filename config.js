import firebase from 'firebase';
require('@firebase/firestore')


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJb482UFPaagYDfrDQVzEaXBvge0PI84U",
    authDomain: "booksantaapp-66085.firebaseapp.com",
    databaseURL: "https://booksantaapp-66085.firebaseio.com",
    projectId: "booksantaapp-66085",
    storageBucket: "booksantaapp-66085.appspot.com",
    messagingSenderId: "833153964405",
    appId: "1:833153964405:web:a8a4027f956ffeb422db3c",
    measurementId: "G-W09L9WLBT0"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();