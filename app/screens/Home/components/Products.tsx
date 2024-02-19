import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface ProductsProps {
  images: any[];
}

export default function Products({ images }: ProductsProps) {
  return (
    <View className="flex flex-wrap flex-row gap-3 items-end justify-evenly w-full h-full">
      {images.map((image, index) => (
        <View
          key={index}
          className="bg-gray-200 w-[170px] h-[180px] rounded-md shadow-md relative"
        >
          <Image
            src={image?.download_url}
            alt={image?.author}
            className="w-full h-1/2 object-cover rounded-md"
          />
          <View className="mt-2 p-2">
            <Text className="font-semibold">{image?.author}</Text>
            <View className="flex flex-row gap-1 mt-1">
              <Text>354 ft </Text>
              <Text>•</Text>
              <Text className="text-green-500 font-bold">Open Now</Text>
            </View>

            <View className="mt-2 w-[80px] h-[44px]">
              <Link href="/product/1">
                <Text className="underline">View Item →</Text>
              </Link>
            </View>
          </View>

          <View className="absolute bg-white  right-0 top-2 mr-2 p-2 w-[65px] items-center rounded-full">
            <Text className="">★ 4.5</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
