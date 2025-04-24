
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE79CyBevFYBL5Gv7WjcNoeyf_fY4RBlc",
  authDomain: "typyai-3ab2f.firebaseapp.com",
  projectId: "typyai-3ab2f",
  storageBucket: "typyai-3ab2f.firebasestorage.app",
  messagingSenderId: "730897507272",
  appId: "1:730897507272:web:8af4d87f611dd4df88d6fd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
