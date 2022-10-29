import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Title from "../components/title";

const Results = ({ route, navigation }) => {
  const { score } = route.params;
  const ResultImages =
    score > 40
      ? "https://cdni.iconscout.com/illustration/premium/thumb/businessman-with-victory-trophy-4819004-4010292.png"
      : "https://cdni.iconscout.com/illustration/premium/thumb/business-startup-plan-failure-2357700-2004273.png";
  return (
    <View style={styles.container}>
      <Title title="Results" />
      <Text style={styles.score}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: ResultImages,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 26,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  score: {
    fontSize: 22,
    fontWeight: "800",
    alignSelf: "center",
  },
});
