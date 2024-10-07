import { create } from 'zustand'
import { ChainType, Metal } from '../types/types';
import leftChainModel1 from "@/public/pngs/chain1.png";
import leftChainModel2 from "@/public/pngs/chain2.png";
import leftChainModel3 from "@/public/pngs/chain3.png";
import leftChainModel4 from "@/public/pngs/chain4.png";
import leftChainModel5 from "@/public/pngs/chain5.png";
import leftChainModel6 from "@/public/pngs/chain6.png";

interface ProductStore {
    selectedChain: ChainType;
    selectedMetal: Metal;
    selectedLeftChainModel: number | null;
    leftChainModels: typeof leftChainModel1[];
    setSelectedChain: (chain: ChainType) => void;
    setSelectedMetal: (metal: Metal) => void;
    setSelectedLeftChainModel: (modelIndex: number | null) => void;
}

const useProductStore = create<ProductStore>((set) => ({
    selectedChain: 'Left Chain',
    selectedMetal: 'gold',
    selectedLeftChainModel: null,
    leftChainModels: [leftChainModel1, leftChainModel2, leftChainModel3, leftChainModel4, leftChainModel5, leftChainModel6],
    setSelectedChain: (chain) => set({ selectedChain: chain }),
    setSelectedMetal: (metal) => set({ selectedMetal: metal }),
    setSelectedLeftChainModel: (modelIndex) => set({ selectedLeftChainModel: modelIndex }),
}));

export default useProductStore;