import { Image, ScrollView, Text, View } from "react-native";
import HomeHeader from "./components/HomeHeader";
import ProductsWrapper from "./components/ProductsWrapper";

export default function Home() {
  return (
    <View className="min-h-screen w-full p-3">
      <View className="">
        <HomeHeader />
      </View>
      <View className="border-b-2 border-[#d2d2d2d9] pt-2"></View>
      <View className="flex h-full w-full ">
        <ProductsWrapper />
      </View>
    </View>
  );
}
