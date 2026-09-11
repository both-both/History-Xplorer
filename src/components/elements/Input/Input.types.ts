import type { ChangeEvent } from "react";

export type InputProps = {
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
