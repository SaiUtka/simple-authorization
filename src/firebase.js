import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
    apiKey: 'AIzaSyCGjuYN9eeX9uRmXX7rNI7_e0TrxhxYPNs',
    authDomain:'test-auth-project-7ad4a.firebaseapp.com',
    projectId: 'test-auth-project-7ad4a',
    storageBucket: 'test-auth-project-7ad4a.appspot.com',
    messagingSenderId: '602498831255',
    appId: '1:602498831255:web:20b7527b1ad9852a5c6ad2'
};

const app = initializeApp(firebaseConfig);