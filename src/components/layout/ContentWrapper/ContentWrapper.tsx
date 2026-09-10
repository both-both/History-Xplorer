import type { ContentWrapperProps } from "./ContentWrapper.types";
import { ContentWrapperStyled } from "./ContentWrapper.Styled";
import { ThemeToggle } from "../../elements/ThemeToggle/ThemeToggle";

export const ContentWrapper = ({ title, children }: ContentWrapperProps) => {
  return (
    <ContentWrapperStyled innerHTML="main" title={title}>
      <ThemeToggle />
      {children}
    </ContentWrapperStyled>
  );
};
