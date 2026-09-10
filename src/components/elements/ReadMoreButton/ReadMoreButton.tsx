import { useState } from "react";
import type { ReadMoreButtonProps } from "./ReadMoreButton.types";

import { ReadMoreButtonStyled } from "./ReadMoreButton.Styled";

export const ReadMoreButton = ({ links }: ReadMoreButtonProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ReadMoreButtonStyled onClick={() => setVisible(!visible)}>
        {visible ? "Read less" : "Read more"}
      </ReadMoreButtonStyled>
      {visible &&
        links.map((link) => (
          <a key={link.link} href={link.link} target="_blank" rel="noreferrer">
            {link.title}
          </a>
        ))}
    </>
  );
};
