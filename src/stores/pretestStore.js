import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePretestStore = create(
  persist(
    (set) => ({
      modulData: [],
      masterOptions: [],
      jobSpesialistId: '',
      setJobSpesialistId: (id) => set({ jobSpesialistId: id }),
      setModulData: (data) => set({ modulData: data }),
      setMasterOptions: (options) => set({ masterOptions: options }),
    }),
    { name: 'pretest-storage' }
  )
);

export default usePretestStore;
