"use client";

import { photos } from "../../../data";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PhotoModal({ params: { id } }) {
  const router = useRouter();
  const photo = photos.find((p) => p.id === id);
  const handleClick = () => {
    router.back();
  };
  const handleClickImage = (e) => {
    e.stopPropagation();
    window.location.reload();
  };
  return (
    <div
      className="flex h-60 
        justify-center items-center fixed 
        bottom-0 bg-stone-950/[.9] w-full h-full
      "
      onClick={handleClick}
    >
      <img className="w-9/12 cursor-pointer" src={photo.src} onClick={handleClickImage} />
    </div>
  );
}
