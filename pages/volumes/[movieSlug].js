import { volumes } from "../../lib/data";
import Volume from "../../components/Volume";
import { useRouter } from "next/router";

import styled, { css } from "styled-components";

export default function Volume1Page() {
  const router = useRouter();
  const { movieSlug } = router.query;

  const currentVolume = volumes.find(({ slug }) => slug === movieSlug); //filter with slug and make site rendering dependand on that

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books, next, prev, color } = currentVolume;

  console.log(color);

  return (
    <StyledBackground color={color}>
      <Volume
        title={title}
        description={description}
        imageLink={cover}
        books={books}
        prev={prev}
        next={next}
      />
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  background-color: ${({ color }) => color};
`;
