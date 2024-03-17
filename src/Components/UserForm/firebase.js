// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6IwYOZeO128mm-ShcLo_HC1VCJsJ9uOo",
  authDomain: "homehelphub-ad342.firebaseapp.com",
  projectId: "homehelphub-ad342",
  storageBucket: "homehelphub-ad342.appspot.com",
  messagingSenderId: "660945347439",
  appId: "1:660945347439:web:00c001f5598a4ecb48fe9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
