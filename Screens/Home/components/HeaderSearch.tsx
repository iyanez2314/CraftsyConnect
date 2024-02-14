import React from "react";
import { TextInput, View } from "react-native";
import { Icons } from "../../../Components/icons";

export default function HeaderSearch() {
  return (
    <View>
      <TextInput
        className="bg-[#e1e1e1d9] p-4 rounded-lg text-black placeholder:text-black placeholder:pl-12 relative"
        placeholder="Shop"
      />
      <View className="absolute top-3 left-3">
        <Icons.Search color="black" />
      </View>
    </View>
  );
}
