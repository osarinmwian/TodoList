import { COLORS } from "@assets/themes";
import React, { useState } from "react";
import { View, PanResponder, Animated } from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  icon?: any;
  size?: number;
};
const CardScreen = (props: Props) => {
  const [pan1, setPan1] = useState(new Animated.ValueXY());
  const [panResponder1, setPanResponder1] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan1.x, dy: pan1.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan1, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );

  const [pan2, setPan2] = useState(new Animated.ValueXY());
  const [panResponder2, setPanResponder2] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan2.x, dy: pan2.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan2, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );

  const [pan3, setPan3] = useState(new Animated.ValueXY());
  const [panResponder3, setPanResponder3] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan3.x, dy: pan3.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan3, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );

  const [pan4, setPan4] = useState(new Animated.ValueXY());
  const [panResponder4, setPanResponder4] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan4.x, dy: pan4.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan4, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );
  const [pan5, setPan5] = useState(new Animated.ValueXY());
  const [panResponder5, setPanResponder5] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan5.x, dy: pan5.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan5, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  );
  return (
    <View style={styles.cardContainer}>
      <Animated.View
        {...panResponder1.panHandlers}
        style={[
          styles.card,
          {
            elevation: WP(4),
            top: WP(6),
            backgroundColor: COLORS.white,
            zIndex: pan1.y,
            width: WP(43),
            height: WP(50),
          },
          pan1.getLayout(),
        ]}
      >
        <FontAwesome5 name={props.icon} size={props.size} color={COLORS.red} />
      </Animated.View>
      <Animated.View
        {...panResponder2.panHandlers}
        style={[
          styles.card,
          {
            elevation: WP(4),
            top: WP(27),
            backgroundColor: COLORS.red,
            zIndex: pan2.y,
            marginTop: WP(-50),
            width: WP(42.6),
            height: WP(50),
          },
          pan2.getLayout(),
        ]}
      >
        <FontAwesome5
          name={props.icon}
          size={props.size}
          color={COLORS.primary}
        />
      </Animated.View>
      <Animated.View
        {...panResponder3.panHandlers}
        style={[
          styles.card,
          {
            elevation: WP(3),
            backgroundColor: COLORS.primary,
            zIndex: pan3.y,
            marginTop: WP(-50),
            width: WP(42.4),
            height: WP(50),
          },
          pan3.getLayout(),
        ]}
      >
        <FontAwesome5
          name={props.icon}
          size={props.size}
          color={COLORS.white}
        />
      </Animated.View>
      <Animated.View
        {...panResponder4.panHandlers}
        style={[
          styles.card,
          {
            elevation: WP(1),
            backgroundColor: COLORS.green,
            zIndex: pan4.y,
            marginTop: WP(-49),
            width: WP(42.2),
            height: WP(50),
          },
          pan3.getLayout(),
        ]}
      >
        <FontAwesome5
          name={props.icon}
          size={props.size}
          color={COLORS.yellow}
        />
      </Animated.View>
      <Animated.View
        {...panResponder5.panHandlers}
        style={[
          styles.card,
          {
            elevation: WP(0.5),
            backgroundColor: COLORS.yellow,
            zIndex: pan5.y,
            marginTop: WP(-49),
            width: WP(42.1),
            height: WP(50),
          },
          pan3.getLayout(),
        ]}
      >
        <FontAwesome5
          name={props.icon}
          size={props.size}
          color={COLORS.green}
        />
      </Animated.View>
    </View>
  );
};

export default CardScreen;
