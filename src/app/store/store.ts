import { create } from 'zustand'
import { ChainType, Metal } from '../types/types';

interface ProductStore {
    selectedChain: ChainType;
    selectedMetal: Metal;
    setSelectedChain: (chain: ChainType) => void;
    setSelectedMetal: (metal: Metal) => void;
}

const useProductStore = create<ProductStore>((set) => ({
    selectedChain: 'Left Chain',
    selectedMetal: 'gold',
    setSelectedChain: (chain) => set({ selectedChain: chain }),
    setSelectedMetal: (metal) => set({ selectedMetal: metal }),
}));

export default useProductStore;