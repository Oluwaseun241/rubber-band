import { Pressable, StyleSheet, Animated, View } from "react-native";
import RubberBandEffect from "./components/Band";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
  };

  const resetAnimation = () => {
    setIsPressed(false);
  };

  return (
    <View style={styles.container}>
      {isPressed && (
        <View style={styles.rubberBandContainer}>
          <RubberBandEffect />
        </View>
      )}
      <Pressable onPress={handlePress} onPressOut={resetAnimation}>
        {({ pressed }) => (
          <Animated.View style={[styles.buttonContainer, isPressed && pressed]}>
            <EvilIcons name="share-apple" size={40} color="black" />
          </Animated.View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightpink",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
});
