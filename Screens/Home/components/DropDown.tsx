import { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";

const local_data = [
  {
    value: "1",
    lable: "San Antonio, Texas",
  },
  {
    value: "2",
    lable: "San Francisco, California",
  },
  {
    value: "3",
    lable: "Chicago, Illinois",
  },
  {
    value: "4",
    lable: "Denver, Colorado",
  },
];

export default function DropDown() {
  const [selectedValue, setSelectedValue] = useState("1");
  return (
    <SelectCountry
      className="w-4/5 border-b-2 border-gray-300 rounded-md"
      data={local_data}
      search
      maxHeight={200}
      value={selectedValue}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={(e) => {
        setSelectedValue(e.value);
      }}
    />
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
