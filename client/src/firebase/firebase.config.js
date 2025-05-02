// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2toifFDUCdLt8CBvWFP7U_nQh0aP_A1o",
  authDomain:"job-react-js.firebaseapp.com",
  projectId: "job-react-js",
  storageBucket:"job-react-js.appspot.com",
  messagingSenderId: "126190225820",
  appId: "1:126190225820:web:ad7fa35306ae07c19b2059",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
