import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: 'AIzaSyBDp2087lUOFHe6QueLcd6emvLwxw5QUJA',
  authDomain: "app-chat-da391.firebaseapp.com",
  projectId: "app-chat-da391",
  storageBucket: "app-chat-da391.appspot.com",
  messagingSenderId: "51586015702",
  appId: "1:51586015702:web:feb61dcfe4460bd6cd8477",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();