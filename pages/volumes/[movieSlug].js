import { volumes } from "../../lib/data";
import Volume from "../../components/Volume";
import { useRouter } from "next/router";

export default function Volume1Page() {
  const router = useRouter();
  const { movieSlug } = router.query;

  const currentVolume = volumes.find(({ slug }) => slug === movieSlug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;

  return (
    <div>
      <Volume
        title={title}
        description={description}
        imageLink={cover}
        books={books}
      />
    </div>
  );
}
