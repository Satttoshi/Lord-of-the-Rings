import { volumes } from "../../lib/data";
import Volume from "../../components/Volume";

import Image from "next/image";

const volume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function Volume1Page() {
  return (
    <div>
      <Volume
        title={volume.title}
        description={volume.description}
        imageLink={volume.cover}
        books={volume.books}
      />
    </div>
  );
}

{
  /* <h1>Volume1</h1>
<p>{volumes[0].description}</p>
<ul>
  <li>{volumes[0].books[0].ordinal}</li>
  <li>{volumes[0].books[0].title}</li>
</ul>
<ul>
  <li>{volumes[0].books[1].ordinal}</li>
  <li>{volumes[0].books[1].title}</li>
</ul>
<Image
  src="/images/the-fellowship-of-the-ring.png"
  alt="book cover"
  width={140}
  height={230}
/> */
}
