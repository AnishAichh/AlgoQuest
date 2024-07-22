import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBWNezDdiTSjK4Zimy9Gogvi3MCUj9VlO0",
  authDomain: "algoquest-f0252.firebaseapp.com",
  projectId: "algoquest-f0252",
  storageBucket: "algoquest-f0252.appspot.com",
  messagingSenderId: "124308482925",
  appId: "1:124308482925:web:8dfbd7285010c237304864"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;

