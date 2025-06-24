import type { ReactNode } from "react";

export interface NoticeList {
  content: ReactNode;
  id: number;
  title: string;
  username: string;
  createdAt: string;
}