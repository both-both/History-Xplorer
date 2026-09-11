import { forwardRef } from "react";
import type { InputProps } from "./Input.types";
import { InputStyled } from "./Input.Styled";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, value, onChange }, ref) => {
    return (
      <InputStyled
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  },
);
