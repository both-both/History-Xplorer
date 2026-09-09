import { ContainerStyled } from "./Container.Styled";
import type { ContainerProps } from "./Container.types";

export const Container = ({
  innerHTML = "div",
  className,
  color,
  children,
  title,
}: ContainerProps) => {
  return (
    <ContainerStyled
      as={innerHTML}
      $innerHTML={innerHTML}
      $color={color}
      className={className}
      title={title}
    >
      {children}
    </ContainerStyled>
  );
};
