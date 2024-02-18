import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Products from "./Products";

export default function ProductsWrapper() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    if (!response.ok) {
      console.log("Error fetching images");
      return;
    }

    const data = await response.json();
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <ScrollView
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={false}
      className="h-full w-full mt-3"
    >
      <Products images={images} />
    </ScrollView>
  );
}
