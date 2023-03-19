import Image from "next/image";
import { useRouter } from "next/router";
import { uid } from "uid";
import styled, { css } from "styled-components";

import StyledSection from "./StyledSection";

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  margin: 40px 0 15px 30px;

  &:hover .button__chevron {
    animation: bounce 0.5s ease-in infinite alternate;
  }

  &:hover .button__text {
    font-weight: bold;
  }

  @keyframes bounce {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-8px);
    }
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  color: var(--color-earth);

  h1 {
    margin: 0;
    font-size: 2.5rem;
    line-height: 1.1;
  }

  p {
    margin: 15px 0px 25px 0px;
  }
`;

const StyledList = styled.li`
  list-style-type: none;
  color: white;

  span {
    color: var(--color-smoke);
    font-size: 0.8rem;
  }

  h2 {
    color: var(--color-clouds);
    margin: 5px 0px;
    font-size: 1rem;
  }
`;

const StyledNavigation = styled.nav`
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  & .navigation__prev {
    align-self: flex-start;
  }

  & .navigation__next {
    align-self: flex-end;
  }
`;

const StyledNavButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  outline: none;
  color: var(--color-earth);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 0.8rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  span {
    font-style: oblique;
  }

  h3 {
    font-size: 0.75rem;
    margin: 0;
  }

  &:hover .button__arrowleft {
    animation: bounce 0.5s ease-in infinite alternate;
  }

  &:hover {
    transform: scale(1.01);
  }

  &:hover .button__arrowright {
    animation: bounceright 0.5s ease-in infinite alternate;
  }

  @keyframes bounceright {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(8px);
    }
  }
`;

export default function Volume({
  title,
  description,
  imageLink,
  books,
  prev,
  next,
  color,
}) {
  const router = useRouter();

  function slugToTitle(slug) {
    if (slug === "the-fellowship-of-the-ring") {
      return "The Fellowship of the Ring";
    } else if (slug === "the-two-towers") {
      return "The Two Towers";
    } else {
      return "The Return of the King";
    }
  }

  return (
    <>
      <StyledButton
        type="button"
        onClick={() => {
          router.push("/volumes");
        }}
      >
        <svg
          className="button__chevron"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="button__text">All Volumes</span>
      </StyledButton>
      <StyledArticle>
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledArticle>
      <StyledSection color={color}>
        <ul>
          {books.map((book) => {
            return (
              <StyledList key={uid()}>
                <span>{book.ordinal}</span>
                <h2>{book.title}</h2>
              </StyledList>
            );
          })}
        </ul>

        <Image src={imageLink} alt="book cover" width={140} height={230} />
      </StyledSection>
      <StyledNavigation>
        {prev ? (
          <StyledNavButton
            className="navigation__prev"
            type="button"
            onClick={() => {
              router.push("/volumes/" + prev);
            }}
          >
            <svg
              className="button__arrowleft"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="prev">
              <span>Previous Volume</span>
              <h3>{slugToTitle(prev)}</h3>
            </p>
          </StyledNavButton>
        ) : null}

        {next ? (
          <StyledNavButton
            className="navigation__next"
            type="button"
            onClick={() => {
              router.push("/volumes/" + next);
            }}
          >
            <p className="prev">
              <span>Previous Volume</span>
              <h3>{slugToTitle(next)}</h3>
            </p>
            <svg
              className="button__arrowright"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </StyledNavButton>
        ) : null}
      </StyledNavigation>
    </>
  );
}
