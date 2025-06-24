import { create } from "zustand";
import Cookies from 'js-cookie';

interface User {
  username: string;
  role_id: number | null;
  token: string;
  exprTime: number;
}

interface UserState {
  user: User | null;
  isLogin: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLogin: false,

  loginUser: (user) => {
    Cookies.set("token", user.token, { expires: user.exprTime / 86400 });
    Cookies.set("user", JSON.stringify(user), { expires: user.exprTime / 86400 });
    set({ user, isLogin: true });
  },

  logoutUser: () => {
    Cookies.remove("token");
    Cookies.remove("user");
    set({ user: null, isLogin: false });
  },
}));
