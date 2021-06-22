import firebase from './firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: process.env.API_AUTH_FIREBASE,
    projectId: process.env.API_ID_FIREBASE,
    storageBucket: process.env.API_BUCKET_FIREBASE,
    messagingSenderId: process.env.API_SENDER_ID_FIREBASE,
    appId: process.env.API_APP_ID_FIREBASE
})

export const auth = app.auth()
export default app;