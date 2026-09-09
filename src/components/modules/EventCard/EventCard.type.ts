export type EventLink = { title: string; link: string };

export type EventCardProps = {
  year: string;
  text: string;
  links: EventLink[];
};
