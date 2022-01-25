import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCOh5hJVLmFoKXyP71-kHkSwatK-STz3IE',
  authDomain: 'hufs-literature.firebaseapp.com',
  projectId: 'hufs-literature',
  clientEmail:
    'firebase-adminsdk-v65f5@hufs-literature.iam.gserviceaccount.com',
  storageBucket: 'hufs-literature.appspot.com',
  messagingSenderId: '40456101723',
  appId: '1:40456101723:web:26c27546c167bcecd4047e',
  measurementId: 'G-PKG6206GJZ',
  databaseURL: 'hufs-literature-default-rtdb.firebaseio.com',
};

const firebaseApp = initializeApp(firebaseConfig);
const myProjectStorage = getStorage(firebaseApp);
const myProjectFirestore = getFirestore();

export { myProjectStorage, myProjectFirestore };
