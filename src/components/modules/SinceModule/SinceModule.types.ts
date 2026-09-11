export type EventLink = {
  title: string;
  link: string;
};

export type HistoryEvent = {
  year: string;
  text: string;
  links: EventLink[];
};

export type SinceResponse = {
  data: { Events: HistoryEvent[] };
};
