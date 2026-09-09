import type { ContentWrapperProps } from "./ContentWrapper.types";
import { ContentWrapperStyled } from "./ContentWrapper.Styled";

export const ContentWrapper = ({ title, children }: ContentWrapperProps) => {
  return (
    <ContentWrapperStyled innerHTML="main" title={title}>
      {children}
    </ContentWrapperStyled>
  );
};
