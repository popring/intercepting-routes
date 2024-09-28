import { photos } from "../../data";
import Link from "next/link";

export default function PhotoPage({ params: { id } }) {
  const photo = photos.find((p) => p.id === id);
  return (
    <div>
      <Link href="/" className="ml-10 text-orange-500">
        返回
      </Link>
      <img className="block w-9/12 mx-auto mt-10" src={photo.src} />
    </div>
  );
}
