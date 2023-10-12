
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBp5VyN-srwkqPBoYi8iOGsbKU8laHhd4I",
    authDomain: "tienda-gamer-react-491b0.firebaseapp.com",
    projectId: "tienda-gamer-react-491b0",
    storageBucket: "tienda-gamer-react-491b0.appspot.com",
    messagingSenderId: "1027833970431",
    appId: "1:1027833970431:web:7848ffb0c572126db2d6ca"
};

initializeApp(firebaseConfig)

const db = getFirestore();

export { db };