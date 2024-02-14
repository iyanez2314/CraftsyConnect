import { ScrollView, Text, View } from "react-native";

const catergory_data = [
  {
    id: 9,
    name: "Beauty & Hygiene",
  },
  {
    id: 13,
    name: "Health & Wellness",
  },
  {
    id: 21,
    name: "Fashion",
  },
  {
    id: 22,
    name: "Home & Furniture",
  },
];

export default function Category() {
  return (
    <ScrollView
      className="space-x-3 w-full mt-2  align-middle"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {catergory_data.map((category) => (
        <View key={category.id}>
          <Text>{category.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
