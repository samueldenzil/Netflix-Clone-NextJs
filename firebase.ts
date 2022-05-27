// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDMU57ZbUdWNFojHbeg_jfhYgELWAp6FhI',
  authDomain: 'netflix-clone-467ac.firebaseapp.com',
  projectId: 'netflix-clone-467ac',
  storageBucket: 'netflix-clone-467ac.appspot.com',
  messagingSenderId: '82510742710',
  appId: '1:82510742710:web:9e08c9254f86e73dc09217',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
