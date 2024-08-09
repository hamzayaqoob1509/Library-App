import create from 'zustand';

type ModalStore = {
  isKpiModalOpen: boolean;
  toggleKpiModal: () => void;
  // Add other modal states and toggles
};

export const useModalStore = create<ModalStore>((set) => ({
  isKpiModalOpen: false,
  toggleKpiModal: () =>
    set((state) => ({ isKpiModalOpen: !state.isKpiModalOpen })),
  // Add other modal toggles
}));
