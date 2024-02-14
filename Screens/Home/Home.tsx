import { Image, ScrollView, Text, View } from "react-native";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  return (
    <View className="min-h-screen w-full">
      <View className="p-4">
        <HomeHeader />
      </View>
      <View className="border-b-2 border-[#d2d2d2d9] w-screen"></View>
      <View className="">
        <ScrollView
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          className="mt-4"
        >
          <View className="flex flex-1 flex-row flex-wrap justify-center gap-4 ">
            <View className="">
              <Image
                className="w-[200px] h-[200px] rounded-md"
                src="https://picsum.photos/200/300"
              />
            </View>
            <View className="">
              <Image
                className="w-[200px] h-[200px] rounded-md"
                src="https://picsum.photos/200/300"
              />
            </View>
            <View className="">
              <Image
                className="w-[200px] h-[200px] rounded-md"
                src="https://picsum.photos/200/300"
              />
            </View>
            <View className="">
              <Image
                className="w-[200px] h-[200px] rounded-md"
                src="https://picsum.photos/200/300"
              />
            </View>
            <View className="">
              <Image
                className="w-[200px] h-[200px] rounded-md"
                src="https://picsum.photos/200/300"
              />
            </View>
            <View className="">
              <Image
                className="w-[200px] h-[200px] rounded-md"
                src="https://picsum.photos/200/300"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
