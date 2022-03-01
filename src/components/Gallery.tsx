import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { NewsQuery } from "../graphql/Query";
import { INews } from "../Types";
import GalleryItem from "./GalleryItem";

function Gallery() {
  const [galleryItems, setGalleryItems] = useState<INews[]>([]);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const { data } = useQuery(NewsQuery);

  useEffect(() => {
    if (data) {
      setGalleryItems(data.news);
    }
  }, [data]);

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
      {galleryItems.length > 1 ? (
        <GalleryItem {...galleryItems[currentItem]} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Gallery;
