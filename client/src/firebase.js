import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBeLfgXqUUas-xiIiX3c7Fy6ZnRF6jAH3E',
  authDomain: 'video-78225.firebaseapp.com',
  projectId: 'video-78225',
  storageBucket: 'video-78225.appspot.com',
  messagingSenderId: '238991543033',
  appId: '1:238991543033:web:a9cbe123be897679f17028',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
