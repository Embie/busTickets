import * as firebase from 'firebase';

const  prodConfig = {
    apiKey: "AIzaSyDvEG7PFEI8bJpOGtyT6ZsFDLxCQMHMtkA",
    authDomain: "myfirstproject-32ced.firebaseapp.com",
    databaseURL: "https://myfirstproject-32ced.firebaseio.com",
    projectId: "myfirstproject-32ced",
    storageBucket: "myfirstproject-32ced.appspot.com",
    messagingSenderId: "518499211430"
  };
  const devConfig= {
    apiKey: "AIzaSyDvEG7PFEI8bJpOGtyT6ZsFDLxCQMHMtkA",
    authDomain: "myfirstproject-32ced.firebaseapp.com",
    databaseURL: "https://myfirstproject-32ced.firebaseio.com",
    projectId: "myfirstproject-32ced",
    storageBucket: "myfirstproject-32ced.appspot.com",
    messagingSenderId: "518499211430"
  };

  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
