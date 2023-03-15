import Image from "next/image";

export default function Volume({ title, description, imageLink, books }) {
  console.log(books);
  return (
    <div>
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
    </div>
  );
}
