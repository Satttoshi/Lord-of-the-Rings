import { introduction, volumes } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { uid } from "uid";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function VolumePage() {
  const router = useRouter();

  const randomMovie = getRandomElement(volumes); // randomize movie list

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={uid()}>
              <Link href={"/volumes/" + volume.slug}>{volume.slug}</Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          router.push("/volumes/" + randomMovie.slug);
        }}
      >
        Random Movie
      </button>
    </div>
  );
}
