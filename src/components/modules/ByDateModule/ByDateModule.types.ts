import type React from "react";

export type ByDateProps = {
  children: React.ReactNode;
  year: string;
  text: string;
};
export type EventLink = {
  title: string;
  link: string;
};

export type HistoryEvent = {
  year: string;
  text: string;
  links: EventLink[];
};

export type ByDateResponse = {
  data: { Events: HistoryEvent[] };
};
