import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-b8130.firebaseapp.com",
  projectId: "interviewai-b8130",
  storageBucket: "interviewai-b8130.firebasestorage.app",
  messagingSenderId: "980250196049",
  appId: "1:980250196049:web:eb9d724dd646f8cb486070"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };