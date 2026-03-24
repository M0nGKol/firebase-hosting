// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMMbPTaeIrdvh2ExTZ_1ZDNztWmx2PO4I",
  authDomain: "fir-hosting-c89c9.firebaseapp.com",
  projectId: "fir-hosting-c89c9",
  storageBucket: "fir-hosting-c89c9.firebasestorage.app",
  messagingSenderId: "361841084292",
  appId: "1:361841084292:web:3f5ceb2ff21fc619477fd1",
  measurementId: "G-B5J9NPL3SE"
};

// Initialize Firebase
// We check if an app is already initialized to prevent Next.js fast-refresh from throwing errors
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only in the browser (it causes errors during Server-Side Rendering if not handled)
let analytics: any;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
