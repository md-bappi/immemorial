import { useRef } from "react";
import {
  useGsapGalleryCategory,
  useGsapGalleryImage,
  useGsapGalleryTitle,
} from "../hooks/gsap";

const GalleryItem = ({ image }) => {
  const galleryTitleRef = useRef(null);
  const galleryCategoryRef = useRef(null);
  const galleryImageRef = useRef(null);

  useGsapGalleryImage(galleryImageRef);
  useGsapGalleryTitle(galleryTitleRef, galleryImageRef);
  useGsapGalleryCategory(galleryCategoryRef, galleryImageRef);

  return (
    <div className="gallery-item">
      <h1 className="gallery-item-title" ref={galleryTitleRef}>
        {image.title}
      </h1>
      <p className="gallery-item-category" ref={galleryCategoryRef}>
        {image.category}
      </p>
      <div
        ref={galleryImageRef}
        className="gallery-item-img"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </div>
  );
};

export default GalleryItem;
