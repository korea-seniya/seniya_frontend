import { create } from "zustand";

interface AuthState {
  isLogin: boolean; 
  role_id: number | null;
  setLogin: (role_id: number) => void;
  setLogout: () => void;
}

export const userAuthStore = create<AuthState>((set) => ({
  isLogin: false,
  role_id: null,
  setLogin: (role_id) => set({ isLogin: true, role_id }),
  setLogout: () => set({ isLogin: false, role_id: null })
}));
