import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const dice = {
  1: require("./assets/dice1.png"),
  2: require("./assets/dice2.png"),
  3: require("./assets/dice3.png"),
  4: require("./assets/dice4.png"),
  5: require("./assets/dice5.png"),
  6: require("./assets/dice6.png"),
};

export default function App() {
  const [dice1, setDice1] = useState("1");
  const [dice2, setDice2] = useState("5");

  function rollTheDice() {
    const dice1Random = Math.floor(Math.random() * 6 + 1).toString();
    const dice2Random = Math.floor(Math.random() * 6 + 1).toString();

    setDice1(dice1Random);
    setDice2(dice2Random);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          source={dice[dice1]}
          style={{
            width: 128,
            height: 128,
          }}
        />

        <Image
          source={dice[dice2]}
          style={{
            width: 128,
            height: 128,
            marginStart: 20,
          }}
        />
      </View>

      <TouchableOpacity onPress={rollTheDice}>
        <View
          style={{
            backgroundColor: "#F39C12",
            marginTop: 40,
            paddingHorizontal: 40,
            paddingVertical: 20,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            ROLL THE DICE
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
