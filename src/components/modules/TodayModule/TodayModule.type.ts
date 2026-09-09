import type { ReactNode } from "react";

export type TodayProps = {
  children: ReactNode;
  year: string;
  text: string;
};

// TodayModule.type.ts
export type EventLink = { title: string; link: string };
export type HistoryEvent = { year: string; text: string; links: EventLink[] };
export type TodayResponse = { data: { Events: HistoryEvent[] } };
