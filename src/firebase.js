import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD7UikBNoxSRnJ27NdRoU9wlzP2JpEL6Is',
  authDomain: 'linkedin-clone-bbde2.firebaseapp.com',
  projectId: 'linkedin-clone-bbde2',
  storageBucket: 'linkedin-clone-bbde2.appspot.com',
  messagingSenderId: '56747625663',
  appId: '1:56747625663:web:d79f9899b595a37cfd4a0a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const db = getFirestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
