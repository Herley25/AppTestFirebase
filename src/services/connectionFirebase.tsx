// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDhZw9rHoz2J51uOE_aVM6zpVBJETFYdUM',
  authDomain: 'createpoctest.firebaseapp.com',
  projectId: 'createpoctest',
  storageBucket: 'createpoctest.appspot.com',
  messagingSenderId: '1034071205589',
  appId: '1:1034071205589:web:60f763c8426ced2a55245c',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
