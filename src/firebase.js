import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeHkkGTrKpfIY0bsXT4VOWGYm4XGwJLLM",
  authDomain: "recipes-fa956.firebaseapp.com",
  projectId: "recipes-fa956",
  storageBucket: "recipes-fa956.appspot.com",
  messagingSenderId: "987317010280",
  appId: "1:987317010280:web:a268bcd5a2275ef17a20dd"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);