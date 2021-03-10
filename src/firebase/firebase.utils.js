import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC4vX7-H2wro0FN4ZijQUXbgTxv7glVdms",
  authDomain: "crxwn-db.firebaseapp.com",
  projectId: "crxwn-db",
  storageBucket: "crxwn-db.appspot.com",
  messagingSenderId: "226662289384",
  appId: "1:226662289384:web:49db367044ee8463c55e5d",
  measurementId: "G-ES4EJ79SK8"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message);
    }
  }
  
return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;