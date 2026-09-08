import { Grid } from "react-loader-spinner";
import type { LoaderProps } from "./Loader.types";
import { LoaderStyled } from "./Loader.Styled";

export const Loader = ({
  visible,
  height,
  width,
  color,
  ariaLabel,
  radius,
  wrapperStyle,
  wrapperClass,
}: LoaderProps) => {
  return (
    <LoaderStyled>
      <Grid
        visible={visible}
        height={height}
        width={width}
        color={color}
        ariaLabel={ariaLabel}
        radius={radius}
        wrapperStyle={wrapperStyle}
        wrapperClass={wrapperClass}
      />
    </LoaderStyled>
  );
};
