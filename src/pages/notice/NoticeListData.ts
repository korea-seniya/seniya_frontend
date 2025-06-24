import type { ReactNode } from "react";

export interface NoticeList {
  content: ReactNode;
  noticeId: number;
  title: string;
  username: string;
  createdAt: string;
}