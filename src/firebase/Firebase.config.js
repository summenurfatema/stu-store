import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcW5hN4H5WJW1_VJcJSFXx8qvEuYvR_hI",
  authDomain: "stu-store.firebaseapp.com",
  projectId: "stu-store",
  storageBucket: "stu-store.appspot.com",
  messagingSenderId: "1068821410537",
  appId: "1:1068821410537:web:f995b4004a676f69497678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;