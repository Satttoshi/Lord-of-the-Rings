import styled, { css } from "styled-components";

const StyledSection = styled.section`
  background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.15)
    ),
    ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 30px 0;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 0 0 40px;
  }

  img {
    margin-right: 40px;
    box-shadow: var(--box-shadow-book);
    transition: 0.15s ease-in-out;
  }
  img:hover {
    box-shadow: var(--box-shadow-book--hover);
    transform: scale(1.05);
  }
`;

export default StyledSection;
