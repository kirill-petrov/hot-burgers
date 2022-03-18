import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAce_ZaPcbG3Q7SxVmSrs_A4rkT2pHiYGg",
  authDomain: "hot-burgers-aaa48.firebaseapp.com",
  databaseURL: "https://hot-burgers-aaa48-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;

