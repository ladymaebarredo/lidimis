import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQlAyD_ozdEg4Iybq5VrA_Om-fpmuy2kk",
  authDomain: "todo-fd235.firebaseapp.com",
  projectId: "todo-fd235",
  storageBucket: "todo-fd235.appspot.com",
  messagingSenderId: "566952235446",
  appId: "1:566952235446:web:f2d124282b7319513c7117",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
