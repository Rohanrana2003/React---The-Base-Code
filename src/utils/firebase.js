// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO1WVZ6B_vZp_uT0PiD_Qr8V6Kl--rqZI",
  authDomain: "react-aurant.firebaseapp.com",
  projectId: "react-aurant",
  storageBucket: "react-aurant.appspot.com",
  messagingSenderId: "134643108790",
  appId: "1:134643108790:web:f0ca08ee0fb23b91828f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();