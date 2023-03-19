import { volumes } from "../../lib/data";
import Volume from "../../components/volume";
import { useRouter } from "next/router";

export default function Volume1Page() {
  const router = useRouter();
  const { movieSlug } = router.query;

  const currentVolume = volumes.find(({ slug }) => slug === movieSlug); //filter with slug and make site rendering dependand on that

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books, next, prev, color } = currentVolume;

  return (
    <Volume
      title={title}
      description={description}
      imageLink={cover}
      books={books}
      prev={prev}
      next={next}
      color={color}
    />
  );
}
