// import { create } from 'zustand';
// import { signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, storage, db } from './firebase/firebase';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { doc, getDoc } from 'firebase/firestore';

// const useAuthStore = create((set) => {
//     return {
//       user: null,
//       loading: true,
//       error: null,
  
//       login: async (email, password) => {
//         try {
//           const userCredential = await signInWithEmailAndPassword(auth, email, password);
//           const firebaseUser = userCredential.user;
  
//           const userDocRef = doc(db, 'users', firebaseUser.uid);
//           const userDocSnap = await getDoc(userDocRef);
  
//           if (!userDocSnap.exists()) throw new Error("User document not found.");
  
//           const userData = userDocSnap.data();
  
//           const eventReferences = userData.events || []; // Use event references
//           set({ user: { 
//               uid: firebaseUser.uid,
//               email: firebaseUser.email,
//               displayName: firebaseUser.displayName,
//               photoURL: firebaseUser.photoURL,
//               school: userData.school,
//               events: eventReferences, // Store references directly
//               accepted: userData.accepted
//             },
//             error: null
//           });
//           return userData.accepted;
//         } catch (error) {
//           set({ error: error.message });
//           return false;
//         }
//       },

//       getUser: async () => {
//         try {
//           const firebaseUser = auth.currentUser;
//           if (!firebaseUser) throw new Error("No authenticated user");
      
//           const userDocRef = doc(db, 'users', firebaseUser.uid);
//           const userDocSnap = await getDoc(userDocRef);
      
//           if (!userDocSnap.exists()) throw new Error("User document not found");
      
//           const userData = userDocSnap.data();
      
//           if (!userData.accepted) {
//             set({ error: "Account not yet accepted." });
//             return false;
//           }
      
//           const eventObjects = [];
//           if (Array.isArray(userData.events)) {
//             for (const eventRef of userData.events) {
//               const eventSnap = await getDoc(eventRef);
//               if (eventSnap.exists()) {
//                 eventObjects.push({ id: eventSnap.id, ...eventSnap.data() });
//               }
//             }
//           }
      
//           const fullUser = {
//             uid: firebaseUser.uid,
//             email: firebaseUser.email,
//             displayName: firebaseUser.displayName,
//             photoURL: firebaseUser.photoURL,
//             school: userData.school,
//             accepted: userData.accepted,
//             events: eventObjects
//           };
      
//           set({ user: fullUser, error: null });
//           return fullUser;
//         } catch (error) {
//           set({ error: error.message });
//           return false;
//         }
//       },

//       signup: async (name, email, password, phoneNumber) => {
//         try {
//           const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//           const user = userCredential.user;
  
//           await updateProfile(user, {
//             displayName: name,
//             phoneNumber: phoneNumber
//           });
  
//           set({ user, error: null });
//         } catch (error) {
//           set({ error: error.message });
//         }
//       },
  
//       logout: async () => {
//         try {
//           await signOut(auth);
//           set({ user: null });
//         } catch (error) {
//           set({ error: error.message });
//         }
//       },

//       uploadProfilePhoto: async (file) => {
//         try {
//           if (!file) throw new Error("No file selected");
//           if (!auth.currentUser) throw new Error("User not authenticated");
      
//           const storageRef = ref(storage, `profilePhotos/${auth.currentUser.uid}`);
//           const snapshot = await uploadBytes(storageRef, file);
//           const downloadURL = await getDownloadURL(snapshot.ref);
      
//           await updateProfile(auth.currentUser, { photoURL: downloadURL });
//           set((state) => ({
//             user: { ...state.user, photoURL: downloadURL }
//           }));
//         } catch (error) {
//           console.error("Upload error:", error);
//           set({ error: error.message });
//         }
//       }
  
//     };
//   });
  
//   // Handle auth state persistence
// onAuthStateChanged(auth, async (firebaseUser) => {
//   if (firebaseUser) {
//     try {
//       // Fetch user document from Firestore
//       const userDocRef = doc(db, 'users', firebaseUser.uid);
//       const userDocSnap = await getDoc(userDocRef);

//       if (userDocSnap.exists()) {
//         const userData = userDocSnap.data();

//         // Initialize an array to store the event objects
//         const eventObjects = [];
        
//         if (Array.isArray(userData.events)) {
//           // Fetch all events in parallel
//           const eventPromises = userData.events.map(async (eventRefPath) => {
//             // Convert string reference into DocumentReference
//             const eventRef = doc(db, eventRefPath); // Assuming eventRefPath is like 'events/eventId'
//             const eventSnap = await getDoc(eventRef);
//             if (eventSnap.exists()) {
//               return { id: eventSnap.id, ...eventSnap.data() };
//             }
//             return null; // Return null if the event doesn't exist
//           });

//           // Wait for all event data to be fetched
//           const eventResults = await Promise.all(eventPromises);

//           // Filter out any null values (in case some events didn't exist)
//           eventObjects.push(...eventResults.filter((event) => event !== null));
//         }

//         // Construct the full user object
//         const fullUser = {
//           uid: firebaseUser.uid,
//           email: firebaseUser.email,
//           displayName: firebaseUser.displayName,
//           photoURL: firebaseUser.photoURL,
//           school: userData.school,
//           events: eventObjects,
//           accepted: userData.accepted,
//         };

//         // Update Zustand store
//         useAuthStore.setState({ user: fullUser, loading: false });
//         return;
//       }

//       // If user document doesn't exist, set the state with null user
//       useAuthStore.setState({ user: null, loading: false });
//     } catch (e) {
//       console.error("Error fetching user data:", e);
//       useAuthStore.setState({ user: null, loading: false }); // Ensure loading is false even on error
//     }
//   } else {
//     // If no user is logged in, clear the user from the store
//     useAuthStore.setState({ user: null, loading: false });
//   }
// });
  
//   export default useAuthStore;


// stores/useAuth.js

import { create } from 'zustand';
import { auth, db, storage } from './firebase/firebase'; // ajustează calea dacă e diferită
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';

const useAuth = create((set) => {
  // 🔄 Ascultă schimbările de autentificare (inclusiv la refresh)
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      try {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.data();

        if (!userData) {
          set({ user: null, loading: false, error: 'User document missing' });
          return;
        }

        if (!userData.accepted) {
          set({ user: { accepted: false }, loading: false, error: null });
          return;
        }

        const events = [];
        for (const ref of userData.events || []) {
          const refObj = typeof ref === 'string' ? doc(db, ref) : ref;
          const eventSnap = await getDoc(refObj);
          if (eventSnap.exists()) {
            events.push({ id: eventSnap.id, ...eventSnap.data() });
          }
        }

        const updatedUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          phoneNumber: firebaseUser.phoneNumber,
          accepted: userData.accepted,
          school: userData.school,
          events,
        };

        set({ user: updatedUser, loading: false, error: null });
      } catch (err) {
        console.error('Auth state error:', err);
        set({ user: null, loading: false, error: err });
      }
    } else {
      set({ user: null, loading: false, error: null });
    }
  });

  return {
    user: null,
    loading: true,
    error: null,

    login: async (email, password) => {
      set({ loading: true });
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;

        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const userData = userDoc.data();

        if (!userData.accepted) {
          set({ user: { accepted: false }, loading: false });
          return false;
        }

        const events = [];
        for (const ref of userData.events || []) {
          const refObj = typeof ref === 'string' ? doc(db, ref) : ref;
          const eventSnap = await getDoc(refObj);
          if (eventSnap.exists()) {
            events.push({ id: eventSnap.id, ...eventSnap.data() });
          }
        }

        const updatedUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          accepted: userData.accepted,
          school: userData.school,
          events,
        };

        set({ user: updatedUser, loading: false, error: null });
        return updatedUser;
      } catch (error) {
        console.error('Login error:', error);
        set({ user: null, loading: false, error });
        return false;
      }
    },

    logout: async () => {
      try {
        await signOut(auth);
        set({ user: null, loading: true });
      } catch (error) {
        set({ error: error.message });
      }
    },

    signup: async (name, email, phone, password) => {
      set({ loading: true });
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;

        const newUser = {
          name,
          email,
          phone,
          accepted: false, // implicit, userul nu este acceptat
          school: '',
          events: [],
        };

        await setDoc(doc(db, 'users', firebaseUser.uid), newUser);

        set({ user: { uid: firebaseUser.uid, ...newUser }, loading: false, error: null });
        return true;
      } catch (error) {
        console.error('Signup error:', error);
        set({ user: null, loading: false, error });
        return false;
      }
    },

    uploadProfilePhoto: async (file) => {
      try {
        if (!file) throw new Error("No file selected");
        if (!auth.currentUser) throw new Error("User not authenticated");
    
        const storageRef = ref(storage, `profilePhotos/${auth.currentUser.uid}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
    
        await updateProfile(auth.currentUser, { photoURL: downloadURL });
        set((state) => ({
          user: { ...state.user, photoURL: downloadURL }
        }));
      } catch (error) {
        console.error("Upload error:", error);
        set({ error: error.message });
      }
    }
  };
});

export default useAuth;
