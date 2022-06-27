

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBfpPFKKYawUCN34czSebGjBsKQJj6L9I",
  authDomain: "login-authentication-ca801.firebaseapp.com",
  projectId: "login-authentication-ca801",
  storageBucket: "login-authentication-ca801.appspot.com",
  messagingSenderId: "546465333887",
  appId: "1:546465333887:web:912a263fa6ef398bb4354a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;