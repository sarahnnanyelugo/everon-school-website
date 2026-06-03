import { useState } from "react";

export const useImageViewer = (imageArray) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(imageArray[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % imageArray.length;
    setSelectedImage(imageArray[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    setSelectedImage(imageArray[newIndex]);
    setCurrentIndex(newIndex);
  };

  return {
    selectedImage,
    currentIndex,
    openImage,
    closeImage,
    nextImage,
    prevImage,
  };
};
