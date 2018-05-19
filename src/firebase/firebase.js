import * as firebase from 'firebase';
// Required for side-effects
import '@firebase/firestore'

const  prodConfig = {
  apiKey: "AIzaSyDvEG7PFEI8bJpOGtyT6ZsFDLxCQMHMtkA",
  authDomain: "myfirstproject-32ced.firebaseapp.com",
  projectId: "myfirstproject-32ced"
  };


if (!firebase.apps.length) {
  firebase.initializeApp(prodConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);
export {
  db,
  auth,
};



