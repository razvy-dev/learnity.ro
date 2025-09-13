import { create } from "zustand";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
  Timestamp, // 👈 import Timestamp
} from "firebase/firestore";
import { db } from "./firebase/firebase";

const usePdStore = create((set, get) => ({
  nextEvent: null,
  relatedEvents: [],
  isLoading: false,

  fetchNextEvent: async () => {
    set({ isLoading: true });

    try {
      const snapshot = await getDocs(collection(db, "pd"));
      const now = new Date();

      // Convert and filter PD docs
      const activeFuturePds = snapshot.docs
        .map((d) => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            startDate: data.startDate?.toDate ? data.startDate.toDate() : data.startDate,
            endDate: data.endDate?.toDate ? data.endDate.toDate() : data.endDate,
          };
        })
        .filter((pd) => pd.status === "active" && pd.startDate > now);

      if (activeFuturePds.length === 0) {
        set({ nextEvent: null, relatedEvents: [], isLoading: false });
        return;
      }

      // Sort by startDate (soonest first)
      activeFuturePds.sort((a, b) => a.startDate - b.startDate);

      const nextEvent = activeFuturePds[0];

      // Load related events manually
      let relatedEvents = [];
      if (Array.isArray(nextEvent.eventIds) && nextEvent.eventIds.length > 0) {
        const eventsSnapshot = await getDocs(collection(db, "events"));
        relatedEvents = eventsSnapshot.docs
          .map((d) => {
            const data = d.data();
            return {
              id: d.id,
              ...data,
              date: data.date?.toDate ? data.date.toDate() : data.date,
            };
          })
          .filter((e) => nextEvent.eventIds.includes(e.id));
      }

      set({ nextEvent, relatedEvents, isLoading: false });
    } catch (err) {
      console.error("Error fetching next event:", err);
      set({ nextEvent: null, relatedEvents: [], isLoading: false });
    }
  },

  // submitParticipantForm stays the same
  submitParticipantForm: async (formData) => {
    try {
      const { nextEvent } = get();
      if (!nextEvent) throw new Error("No active PD event loaded");

      const participant = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        highschool: formData.school,
        grade: formData.grade,
        foundOut: formData.howDidYouFindOut || "",
        anythingElse: formData.additionalComments || "",
        eventIds: Object.keys(formData.eventChoices).filter(
          (eventId) => formData.eventChoices[eventId] === "yes"
        ),
      };

      const pdRef = doc(db, "pd", nextEvent.id);
      await updateDoc(pdRef, {
        participants: arrayUnion(participant),
      });

      for (const eventId of participant.eventIds) {
        const eventRef = doc(db, "events", eventId);
        await updateDoc(eventRef, {
          participating: arrayUnion({
            nume: participant.name,
            telefon: participant.phoneNumber,
            liceu: participant.highschool,
            clasa: participant.grade,
            cumAiAflat: participant.foundOut,
            altceva: participant.anythingElse,
          }),
        });
      }
    } catch (err) {
      console.error("Error submitting participant form:", err);
      throw err;
    }
  },
}));

export default usePdStore;
