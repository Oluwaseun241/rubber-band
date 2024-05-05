import React, { useRef } from "react";
import { Animated, View, PanResponder } from "react-native";

const RubberBandEffect = () => {
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // Update position based on gesture movement
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={{
          transform: position.getTranslateTransform(),
        }}
        {...panResponder.panHandlers}
      >
        <View style={{ width: 300, height: 200, backgroundColor: "white" }} />
      </Animated.View>
    </View>
  );
};

export default RubberBandEffect;
