// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBikIej0o9VUyJ00ZFpKLFnqAQ3_qvU884",
  authDomain: "animal-face-9bed1.firebaseapp.com",
  projectId: "animal-face-9bed1",
  storageBucket: "animal-face-9bed1.appspot.com",
  messagingSenderId: "869451754767",
  appId: "1:869451754767:web:5e8ae398548f942d79227a",
  measurementId: "G-B9D4M13SX0"
};


const app = initializeApp(firebaseConfig);
getAnalytics(app);

// 이 값을 사용합니다.
export const db = getFirestore(app);
 

// const app = firebase.initializeApp(firebaseConfig);

// export const db = getFirestore(app)


