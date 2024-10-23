import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
} from 'firebase/firestore';
import { app } from '../firebaseConfig';

const useAuth = () => {
  const db = getFirestore(app);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        setCurrentUser(JSON.parse(user));
        setIsSignedIn(true);
      }
    });
  }, []);

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setCurrentUser(null);
      setIsSignedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCurrentUser = (user) => {
    setCurrentUser(user);
  };

  let backendUrl =
    Platform.OS === 'web'
      ? 'http://localhost:3001'
      : 'https://ready-up-backend.onrender.com';

  const addNewUserToDB = async (user) => {
    /* 
    USER INFO STRUCTURE 

    UID: h5yqw5fFjAWJWNsadasdasda
    EMAIL: test@test.com
    NAME: testUser
    PASSWORD: 123456
    PROFILE PICTURE: JPG, JPEG, PNG
    GROUP INVITES: ARRAY
    GROUPS: ARRAY/REFRERENCE
    */
    try {
      await setDoc(doc(db, 'Users', user.uid), user);
    } catch (error) {
      console.log(error);
    }
  };

  const findUser = async (id) => {
    try {
      const docRef = doc(db, 'Users', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCurrentUser(JSON.stringify(docSnap.data()));
        await AsyncStorage.setItem('user', JSON.stringify(docSnap.data()));
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const createAccount = async (email, password, name) => {
    setLoading(true);
    try {
      // Create a new user account in Firebase Authentication
      const newAccountCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // If the user account is created successfully, add the user's info to the Firestore database
      if (newAccountCredentials.user) {
        addNewUserToDB({
          uid: newAccountCredentials.user.uid,
          email: newAccountCredentials.user.email,
          name: name,
          password: password,
          profilePicture: null,
          groupInvites: [],
          groups: [],
        });

        // Store the user's UID in AsyncStorage
        await AsyncStorage.setItem(
          'user',
          JSON.stringify(newAccountCredentials.user.uid)
        );
      }

      // Set the app state to signed in
      setIsSignedIn(true);

      // Set the loading state to false
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (
        error == 'FirebaseError: Firebase: Error (auth/email-already-in-use).'
      )
        // If the email is already in use, set the error state to 'EMAIL ALREADY IN USE'
        setError('EMAIL ALREADY IN USE');

      // Set the loading state to false
      setLoading(false);
    }
  };

  const signInAuthentication = async (credentals) => {
    // If already signed in, reset the signed-in state
    if (isSignedIn) setIsSignedIn(false);

    // Set loading state to true while attempting authentication
    setLoading(true);

    const { email, password } = credentals;

    try {
      // Attempt to sign in with Firebase authentication
      const verifyAuth = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (verifyAuth) {
        console.log(verifyAuth);
        findUser(verifyAuth.user.uid);
        // Successful sign in, update the signed-in state
        setIsSignedIn(true);
      }
    } catch (error) {
      // Handle errors during sign-in process
      if (error == 'FirebaseError: Firebase: Error (auth/invalid-credential).')
        console.log('NO ACCOUNT EXISTS WITH THIS CREDENTIALS');

      // Set error message for invalid credentials
      setError('Invalid Credentials, please try again.');
    } finally {
      // Reset loading state after authentication attempt
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    signInAuthentication,
    createAccount,
    isSignedIn,
    currentUser,
    updateCurrentUser,
    signOut: signOut,
  };
};

export default useAuth;
