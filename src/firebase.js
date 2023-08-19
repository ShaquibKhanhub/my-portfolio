
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCz7U7ny2k1EqUd6iLI9hobfiFMvwNz4T8",
  authDomain: "shaquib-khan-portfolio.firebaseapp.com",
  projectId: "shaquib-khan-portfolio",
  storageBucket: "shaquib-khan-portfolio.appspot.com",
  messagingSenderId: "86119125084",
  appId: "1:86119125084:web:4f14e423539cfbcf919699"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()