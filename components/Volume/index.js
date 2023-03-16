import Image from "next/image";
import { useRouter } from "next/router";

export default function Volume({
  title,
  description,
  imageLink,
  books,
  prev,
  next,
}) {
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          router.push("/volumes");
        }}
      >
        back
      </button>
      <h1>{title}</h1>
      <p>{description}</p>

      {books.map((book, index) => {
        return (
          <ul key={index}>
            <li>{book.ordinal}</li>
            <li>{book.title}</li>
          </ul>
        );
      })}

      <Image src={imageLink} alt="book cover" width={140} height={230} />

      {prev ? (
        <button
          type="button"
          onClick={() => {
            router.push("/volumes/" + prev);
          }}
        >
          Prev Volume
        </button>
      ) : null}

      {next ? (
        <button
          type="button"
          onClick={() => {
            router.push("/volumes/" + next);
          }}
        >
          Next Volume
        </button>
      ) : null}
    </div>
  );
}
