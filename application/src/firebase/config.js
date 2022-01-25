// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js';
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOh5hJVLmFoKXyP71-kHkSwatK-STz3IE',
  authDomain: 'hufs-literature.firebaseapp.com',
  projectId: 'hufs-literature',
  storageBucket: 'hufs-literature.appspot.com',
  messagingSenderId: '40456101723',
  appId: '1:40456101723:web:26c27546c167bcecd4047e',
  measurementId: 'G-PKG6206GJZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const myProjectStorage = firbase.storage();
const myProjectFirestore = firebase.firestore();

export { myProjectStorage, myProjectFirestore };
