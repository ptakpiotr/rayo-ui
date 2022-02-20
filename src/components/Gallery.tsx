import React, { useEffect, useState } from "react";
import { IGalleryItem } from "../Types";

import GalleryItem from "./GalleryItem";

function Gallery() {
  const [galleryItems, setGalleryItems] = useState<IGalleryItem[]>([]);
  const [currentItem, setCurrentItem] = useState<number>(0);

  useEffect(() => {
    //call an api with axios :)
    let items: IGalleryItem[] = [
      {
        id: "item1",
        url: "http://localhost:3000/bird.jpg",
        description: "First training",
        href: "",
      },
      {
        id: "item2",
        url: "http://localhost:3000/erik.jpg",
        description: "Second training",
        href: "",
      },
      {
        id: "item3",
        url: "http://localhost:3000/bird.jpg",
        description: "Third training",
        href: "",
      },
    ];

    setGalleryItems(items);
  }, []);

  useEffect(() => {
    var inter = setInterval(() => {
      setCurrentItem((prev) => {
        if (prev >= galleryItems.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);

    return () => {
      clearInterval(inter);
    };
  }, [galleryItems]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <GalleryItem {...galleryItems[currentItem]} />
    </div>
  );
}

export default Gallery;
