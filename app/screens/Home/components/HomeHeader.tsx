import { Text, TextInput, View } from "react-native";
import DropDown from "./DropDown";
import HeaderSearch from "./HeaderSearch";
import Category from "./Category";

export default function HomeHeader() {
  return (
    <View className="w-full  flex flex-col justify-evenly space-y-2">
      <View>
        <Text className="font-semibold text-3xl text-[#d2d2d2d9]">
          Your Location
        </Text>
      </View>
      <View className="w-full mb-3">
        <DropDown />
      </View>
      <View className="mb-3">
        <HeaderSearch />
      </View>
      <View className="w-full">
        <Category />
      </View>
    </View>
  );
}
