import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3m-yV3ABIKFkhc7xFI5r3grvQwWHEmk0",
    authDomain: "sit313-login-and-rego-page.firebaseapp.com",
    projectId: "sit313-login-and-rego-page",
    storageBucket: "sit313-login-and-rego-page.appspot.com",
    messagingSenderId: "273804197826",
    appId: "1:273804197826:web:9bb03847e9b5ea21c0605b"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters ({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) =>{
    if (!userAuth.email) return;
    const userDocRef = doc (db, 'users', userAuth.uid );
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(! userSnapshot.exists()){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        })
    }
    catch(error){
    console.log('Error in creating ', error.message)
    }
}
    return userDocRef;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || ! password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}