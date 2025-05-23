import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIczRjKXMfzHneHdUACtntdPr91Lnm9r0",
  authDomain: "se-data-ebf5d.firebaseapp.com",
  projectId: "se-data-ebf5d",
  storageBucket: "se-data-ebf5d.firebasestorage.app",
  messagingSenderId: "45402600795",
  appId: "1:45402600795:web:23cd16284e5ce48034d67e",
  measurementId: "G-HES6NZBQ6M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {
    app,
    auth,
    firestore,
    analytics,
    storage
}
