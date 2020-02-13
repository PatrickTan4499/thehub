import app from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB7373CN3SCsB0IwTmOCO578Y90y4N3iNM",
    authDomain: "thehub-d1e26.firebaseapp.com",
    databaseURL: "https://thehub-d1e26.firebaseio.com",
    projectId: "thehub-d1e26",
    storageBucket: "thehub-d1e26.appspot.com",
    messagingSenderId: "408139708787",
  };



  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();

     /* firebase.firestore().collection('times').add({
        title: 'test',
        time_stamp: 45
    })*/
    }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  test = () => firebase.firestore().collection('times').add({
    title: 'test',
    time_stamp: 45
});


  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  
    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    // *** Classes API ***
    post = uid => this.db.ref(`users/`);

    posts = uid => this.db.ref(`posts`);
}
export default Firebase;
export {app};

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB7373CN3SCsB0IwTmOCO578Y90y4N3iNM",
    authDomain: "thehub-d1e26.firebaseapp.com",
    databaseURL: "https://thehub-d1e26.firebaseio.com",
    projectId: "thehub-d1e26",
    storageBucket: "thehub-d1e26.appspot.com",
    messagingSenderId: "408139708787",
    appId: "1:408139708787:web:eaccef39a4270e258bed06",
    measurementId: "G-B7DV559E6F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>*/