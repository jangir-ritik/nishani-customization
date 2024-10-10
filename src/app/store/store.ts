import { create } from 'zustand';
import { Metal } from '../types/types';

interface ChainPartState {
  metal: Metal;
  label: string;
}

interface ProductStore {
  selectedChainPart: string;
  chainParts: Record<string, ChainPartState>;
  setSelectedChainPart: (part: string) => void;
  setChainPartMetal: (part: string, metal: Metal) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  selectedChainPart: 'L1',
  chainParts: {
    L1: { metal: 'gold', label: 'Left Chain' },
    R1: { metal: 'silver', label: 'Right Chain' },
    Hooktop: { metal: 'silver', label: 'Front Lock' },
    HookBotm: { metal: 'gold', label: 'Back Lock' },
  },
  setSelectedChainPart: (part) => set({ selectedChainPart: part }),
  setChainPartMetal: (part, metal) => set((state) => ({
    chainParts: {
      ...state.chainParts,
      [part]: { ...state.chainParts[part], metal },
    },
  })),
}));

export default useProductStore;