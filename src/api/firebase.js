
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxZEFSXltxWJJBq7HnU5At8KnklYKGUy8",
    authDomain: "news-project-efdca.firebaseapp.com",
    projectId: "news-project-efdca",
    storageBucket: "news-project-efdca.appspot.com",
    messagingSenderId: "968947373848",
    appId: "1:968947373848:web:c4bd9b2708144fdaf4f06d",
    databaseUrl:"https://news-project-efdca-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const userdb = getFirestore(app);