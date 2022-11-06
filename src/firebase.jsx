
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/Auth"

const firebaseConfig = {
  apiKey: "AIzaSyCNBI5d6wDv_rnTFzEgw5bOzjvYmu66yoo",
  authDomain: "react-router-project-4e38e.firebaseapp.com",
  projectId: "react-router-project-4e38e",
  storageBucket: "react-router-project-4e38e.appspot.com",
  messagingSenderId: "813965877716",
  appId: "1:813965877716:web:10768d881047ee7f5cb641",
  measurementId: "G-3ZB5FZ6YDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;*/