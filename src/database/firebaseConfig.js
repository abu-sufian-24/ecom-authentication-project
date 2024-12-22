// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBq-vN2OXCCVZJTFAhgRxVcYLnKuIPRvOA',
  authDomain: 'ecom-d4e9e.firebaseapp.com',
  databaseURL: 'https://ecom-d4e9e-default-rtdb.firebaseio.com',
  projectId: 'ecom-d4e9e',
  storageBucket: 'ecom-d4e9e.firebasestorage.app',
  messagingSenderId: '37647462834',
  appId: '1:37647462834:web:15868cbbe881a1670b34ab',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
