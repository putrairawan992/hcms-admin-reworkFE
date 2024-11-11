import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profile: null,
  setProfile: (profileData) => set({ profile: profileData }),
  clearProfile: () => set({ profile: null }),
}));
