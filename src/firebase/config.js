import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBBXJL5RJ8O3A-xJY8YW8lIB-weWoE0kh0",
  authDomain: "firegram-d484f.firebaseapp.com",
  databaseURL: "https://firegram-d484f.firebaseio.com",
  projectId: "firegram-d484f",
  storageBucket: "firegram-d484f.appspot.com",
  messagingSenderId: "747900881787",
  appId: "1:747900881787:web:73c20dc4e44c93eb790bde",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
