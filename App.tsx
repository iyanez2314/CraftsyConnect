import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import Header from "./Components/Header";
import Home from "./Screens/Home/Home";

export default function App() {
  return (
    <SafeAreaView className="w-full">
      <Home />
    </SafeAreaView>
  );
}
