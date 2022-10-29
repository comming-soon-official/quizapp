import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Results from "./screens/results";
import MyStack from "./navigation/index";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      {/* <Home /> */}
      {/* <Quiz /> */}
      {/* <Results /> */}
    </NavigationContainer>
    // <View style={styles.container}>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
