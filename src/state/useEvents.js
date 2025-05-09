import { create } from "zustand";
import { db, storage } from "./firebase/firebase";
import { getDocs, collection, updateDoc, doc, arrayUnion, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const useEventsStore = create((set) => ({
    events: [],
    loading: true,
    error: null,
  
    fetchEvents: async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
    
        // Use Promise.all to resolve all async operations inside map
        const eventsList = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            
            if (data.photoPath) {
              const imageRef = ref(storage, data.photoPath);
              data.image = await getDownloadURL(imageRef);
            }
    
            return {
              id: doc.id,
              ...data,
              date: data.date.toDate() // Convert Firestore Timestamp to JavaScript Date object
            };
          })
        );
    
        set({ events: eventsList, loading: false, error: null });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
    

    fetchEventById: async (eventId) => {
      try {
        const eventRef = doc(db, "events", eventId);
        const eventSnap = await getDoc(eventRef);
        if (eventSnap.exists()) {
          const data = eventSnap.data();

          if (data.photoPath) {
            const imageRef = ref(storage, data.photoPath);
            data.image = await getDownloadURL(imageRef);
          }
          
          return {
            id: eventSnap.id,
            ...data,
            date: data.date.toDate() // Convert Firestore Timestamp to JavaScript Date object
          };
        } else {
          throw new Error("Event not found");
        }
      } catch (error) {
        set({ error: error.message });
        return null;
      }
    },
  

    addParticipant: async (eventId, participant) => {
        try {
          const eventRef = doc(db, "events", eventId);
          await updateDoc(eventRef, {
            participating: arrayUnion(participant)
          });
          set((state) => ({
            events: state.events.map(event => 
              event.id === eventId 
                ? { ...event, participating: [...event.participating, participant] } 
                : event
            )
          }));
        } catch (error) {
          set({ error: error.message });
        }
      }
    }));
    
    export default useEventsStore;