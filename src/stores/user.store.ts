import { create } from "zustand";

interface UserState {
  username: string;
  token: string;
  exprTime: number;
}