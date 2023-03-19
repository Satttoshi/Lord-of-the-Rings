import { introduction, volumes } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { uid } from "uid";
import styled, { css } from "styled-components";
import Image from "next/image";

const StyledMain = styled.main`
  padding: 0px 35px;
  color: var(--color-earth);
  transition: color 0.3s ease-out;

  h1 {
    font: var(--font-headline-1);
  }

  p {
    font: var(--font-body);
    padding: 20px 0;
  }

  h2 {
    padding: 20px 0;
    font: var(--font-headline-2);
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 320px;

  a {
    display: flex;
    width: 86px;
    flex-direction: column;
    text-decoration: none;
    color: var(--color-earth);
  }

  a:hover img {
    transform: scale(1.03);
  }

  a:hover span {
    font-weight: bold;
  }

  img {
    box-shadow: var(--box-shadow-book);
    transition: transform 0.1s ease-in-out;
  }

  span {
    font: var(--font-caption);
    padding-top: 12px;
  }
`;

export default function VolumePage() {
  const router = useRouter();

  return (
    <StyledMain>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <StyledList>
        {volumes.map((volume) => {
          return (
            <li key={uid()}>
              <Link href={"/volumes/" + volume.slug}>
                <Image
                  src={volume.cover}
                  alt="book cover"
                  width={84}
                  height={138}
                />
                <span>{volume.title}</span>
              </Link>
            </li>
          );
        })}
      </StyledList>
    </StyledMain>
  );
}
