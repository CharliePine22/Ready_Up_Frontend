import { create } from 'zustand';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, app } from '../firebaseConfig';
import { doc, setDoc, getDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore(app);

const authStore = (set, get) => ({
  currentUser: null,
  loading: false,
  error: false,
  isSignedIn: false,
  resetError: () => set({ error: false }),
  updateUser: async (user) => set({ currentUser: user }),
  refreshUserData: async (id) => {
    try {
      const docRef = doc(db, 'Users', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        set({ currentUser: docSnap.data() });
        await AsyncStorage.setItem('user', JSON.stringify(docSnap.data()));
        set({ error: false });
      } else throw new Error('There was an issue updating the user');
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },
  signOut: async () => {
    try {
      await AsyncStorage.removeItem('user');
      set({ currentUser: null });
      set({ isSignedIn: false });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },
  signInAuth: async (credentals) => {
    const { email, password } = credentals;
    set({ loading: true });
    try {
      const verifyAuth = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (verifyAuth) {
        try {
          const docRef = doc(db, 'Users', verifyAuth.user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            set({ currentUser: docSnap.data() });
            await AsyncStorage.setItem('user', JSON.stringify(docSnap.data()));
            set({ isSignedIn: true });
            set({ error: false });
          }
        } catch (error) {
          console.log(error);
          set({ error: error });
        }
        set({ loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ error: error });
      set({ isSignedIn: false });
      set({ loading: false });
    }
  },
  createNewUser: async (credentals) => {
    const { email, password, name } = credentals;
    try {
      const newAccountCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (newAccountCredentials.user) {
        await setDoc(doc(db, 'Users', newAccountCredentials.user.uid), {
          uid: newAccountCredentials.user.uid,
          email: newAccountCredentials.user.email,
          name: name,
          password: password,
          profilePicture: null,
          groupInvites: [],
          groups: [],
        });
        set({
          currentUser: {
            uid: newAccountCredentials.user.uid,
            email: newAccountCredentials.user.email,
            name: name,
            password: password,
            profilePicture: null,
            groupInvites: [],
            groups: [],
          },
        });
      }
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },
});

const useAuthStore = create(authStore);

export default useAuthStore;
