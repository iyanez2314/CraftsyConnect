import { Image, ScrollView, Text, View } from "react-native";
import HomeHeader from "./components/HomeHeader";
import ProductsWrapper from "./components/ProductsWrapper";

export default function Home() {
  return (
    <View className="min-h-screen w-full">
      <View className="p-4">
        <HomeHeader />
      </View>
      <View className="border-b-2 border-[#d2d2d2d9] w-screen"></View>
      <View className="flex h-full w-full">
        <ProductsWrapper />
      </View>
    </View>
  );
}
