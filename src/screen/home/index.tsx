import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HomeTopTab from "@app/component/home_tab";
import { useSelector } from "react-redux";
import { RootState } from "@app/redux/store";
import { COLORS } from "@assets/themes";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { styles } from "./styles";
import StatusBarConntent from "@app/component/status_bar";

const HomeScreen = () => {
  const todos = useSelector((state: RootState) => state.tasks.items);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarConntent
        barStyle="dark-content"
        backgroundColor={COLORS.black}
      />
      <View>
        <View style={styles.taskView}>
          <Text style={styles.text}> Todo</Text>
        </View>
        <View style={styles.countView}>
          <View
            style={{
              borderRadius: WP(20),
              backgroundColor: COLORS.purple,
              width: WP(10),
              height: WP(10),
              marginLeft: WP(10),
              marginTop: WP(-5)
            }}
          >
            <Text style={styles.count}>{todos.length}</Text>
          </View>
        </View>
        <HomeTopTab />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
