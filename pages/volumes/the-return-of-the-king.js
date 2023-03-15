import { volumes } from "../../lib/data";
import Volume from "../../components/Volume";

import Image from "next/image";

const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function Volume3Page() {
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
