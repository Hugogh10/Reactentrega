import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDN1T1UhJnHL3dIqbaLH_hGrNUtKmYs_os",
  authDomain: "ecommerce-d4ad9.firebaseapp.com",
  projectId: "ecommerce-d4ad9",
  storageBucket: "ecommerce-d4ad9.appspot.com",
  messagingSenderId: "943202435550",
  appId: "1:943202435550:web:f7239e2fea636f44485d4f"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)



