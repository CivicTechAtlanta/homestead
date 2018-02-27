import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyA3SWtj0_C-Zg0dCnONACTMsG-Z3EHkIz4",
  authDomain: "fulton-homestead.firebaseapp.com",
  databaseURL: "https://fulton-homestead.firebaseio.com",
  projectId: "fulton-homestead",
  storageBucket: "fulton-homestead.appspot.com",
  messagingSenderId: "367129877415"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const auth = firebase.auth()

export function signIn() {
  auth.signInAnonymously().catch( (error) => {
    console.log(error.code, error.message);
  });
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log(user.uid);

    } else {
      // User is signed out.
      console.log("No user");
    }
  });
}

export const db = firebase.firestore();

export function fillFields(fields, _this) {
  auth.signInAnonymously()
  .then( (user) => {
    const userId = user.uid;
    _this.$cookie.set('userId', userId);
    // Check if user has saved parcel number yet
    const docRef = db.collection('applications').doc(userId);
    docRef.get()
      .then( (doc) => {
        if (doc.exists) {
          Object.keys(fields).forEach( (fieldName) => {
            _this[fieldName] = doc.data()[fieldName] || fields[fieldName];
          })
        }
      })
  })
  .catch( (error) => {
    console.log(error.code, error.message);
  });
}

export function saveFieldsAndNext(fields, _this, nextPage) {
  const userId = _this.$cookie.get('userId');
  let updatedFields = {}
  Object.keys(fields).forEach( (field) => {
    // Save an empty string as a string with a space in it
    if (_this[field] === '') {
      updatedFields[field] = ' ';
    }
    else {
      updatedFields[field] = _this[field];
    }
  })
  updatedFields.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  db.collection('applications').doc(userId).update(updatedFields)
    .then( (docRef) => {
      window.location.href = nextPage;
    });
}

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp();

export default firebase;
