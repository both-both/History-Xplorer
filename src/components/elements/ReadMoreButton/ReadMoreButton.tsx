import { useState } from "react";
import type { ReadMoreButtonProps } from "./ReadMoreButton.types";
import { Container } from "../../Container/Container";

export const ReadMoreButton = ({ links }: ReadMoreButtonProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Read less" : "Read more"}
      </button>
      {visible &&
        links.map((link) => (
          <a key={link.link} href={link.link} target="_blank" rel="noreferrer">
            {link.title}
          </a>
        ))}
    </Container>
  );
};
