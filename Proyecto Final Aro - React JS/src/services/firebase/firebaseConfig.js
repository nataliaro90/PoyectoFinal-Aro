import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHjcLQAI_2vVBXzvxBJ0O96qWmNFzCjBc",
  authDomain: "proyectofinalreact-aro.firebaseapp.com",
  projectId: "proyectofinalreact-aro",
  storageBucket: "proyectofinalreact-aro.appspot.com",
  messagingSenderId: "311569956582",
  appId: "1:311569956582:web:7051d51998cbeb69c60527",
  measurementId: "G-SPDHEJV8PE"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore (app);

