import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const config = {
  apiKey: "AIzaSyD99dKRu3eLtsD3hUdTqxTsuBnTjrQIL2M",
  authDomain: "kindom-c9088.firebaseapp.com",
  projectId: "kindom-c9088",
  storageBucket: "kindom-c9088.appspot.com",
  messagingSenderId: "642361615689",
  appId: "1:642361615689:web:291ce42a7d43e77f50a698",
  measurementId: "G-B31QWSBW68"
}

const app = initializeApp(config)

const provider = new GoogleAuthProvider()
const auth = getAuth()

const signInWithGoogle = async (auth, provider) => {
  try {
    const result = await signInWithPopup(auth, provider)
    return result
  } catch (error) {
    console.log(error)
  }
}

export { signInWithGoogle, auth, provider }
export default app