import { create } from "zustand";

interface User {
  username: string;
  role_id: number | null;
}
interface UserState {
  user: User | null;
  isLogin: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

export const userUserStore = create<UserState>((set) => ({
  user: null,
  isLogin: false,
  loginUser: (user) => set({ user, isLogin: true }),
  logoutUser: () => set({ user: null, isLogin: false })
}));

