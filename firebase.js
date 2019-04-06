import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC9uovqJC9uvTxbCiE-MrqEez0QkPLUuis",
  authDomain: "forms-test-c75e8.firebaseapp.com",
  databaseURL: "https://forms-test-c75e8.firebaseio.com",
  projectId: "forms-test-c75e8",
  storageBucket: "forms-test-c75e8.appspot.com",
  messagingSenderId: "307097191107"
};

firebase.initializeApp(config);

const FirebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebase, FirebaseDB, googleAuth };

// FirebaseDB.ref()
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   })
//   .catch(e => {
//     console.log(e);
//   });
