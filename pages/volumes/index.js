import { introduction, volumes } from "../../lib/data";
import Link from "next/link";

export default function VolumePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume, index) => {
          return (
            <li key={index}>
              <Link href={"/volumes/" + volume.slug}>{volume.slug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
