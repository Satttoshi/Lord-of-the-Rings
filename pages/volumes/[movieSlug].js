import { volumes } from "../../lib/data";
import Volume from "../../components/Volume";
import { useRouter } from "next/router";

export default function Volume1Page() {
  const router = useRouter();
  const { movieSlug } = router.query;

  const currentVolume = volumes.find(({ slug }) => slug === movieSlug);
  const { title, description, cover, books } = currentVolume;

  if (!currentVolume) {
    return null;
  }

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
