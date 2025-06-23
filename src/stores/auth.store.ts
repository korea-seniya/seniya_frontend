import { create } from "zustand";

interface AuthState {
  isLogin: boolean; 
  role_id: string | null;
  setLogin: () => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  role_id: null,
  setLogin: () => set({ isLogin: true }),
  setLogout: () => set({ isLogin: false })
}));
