import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3GQH0DDFcxrslas7IJqgigewGld9LIE0",
  authDomain: "jgarcia-portfolio.firebaseapp.com",
  databaseURL: "https://jgarcia-portfolio.firebaseio.com",
  projectId: "jgarcia-portfolio",
  storageBucket: "jgarcia-portfolio.appspot.com",
  messagingSenderId: "290858835677",
  appId: "1:290858835677:web:b6a22ea8db351b32b54534",
  measurementId: "G-8EMFJ9905C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
