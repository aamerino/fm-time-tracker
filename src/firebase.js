import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import firebaseConfig from './firebase_config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestore = firebase.firestore();

export const auth = firebase.auth();
window.auth = auth;
export const storage = firebase.storage();

export const getAllReservations = () => {
  return firestore.collection('reservations').get();
}

export const checkUserUid = async ({email}) => {
  if (!email) return null;
  const snapshot = await firestore.doc(`users/${email}`);
  console.log(snapshot);
  if(snapshot.id) {
    return snapshot;
  }
};

export function storeReservationInStorage(startTime, endTime) {
  firestore.collection('reservations')
  .doc()
  .set({
    startTime: startTime,
    endTime: endTime,
    user: auth.currentUser.email
})};

window.firestore = firestore;