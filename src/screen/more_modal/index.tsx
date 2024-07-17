import CustomModal from "@app/component/modal";
import Input from "@app/component/text_input";
import { AppDispatch, RootState } from "@app/redux/store";
import { addTodo } from "@app/redux/store/taskSlice";
import { COLORS } from "@assets/themes";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { styles } from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type Props = {
  isVisible: boolean;
  closeModal: () => void;
};

const MoreModal = (props: Props) => {
  return (
    <CustomModal isVisible={props.isVisible} onBackdropPress={props.closeModal}>
      <View style={styles.modal}>
        <View style={styles.contentContainer}>
          <Pressable style={styles.pressable}>
            <Ionicons name="settings" size={WP(6)} style={styles.icon} />
            <Text style={styles.textStyle}>Settings</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(1),
              marginLeft: WP(10),
            }}
          />
          <Pressable style={styles.pressable}>
            <Ionicons name="calendar" size={WP(5)} style={styles.icon} />
            <Text style={styles.textStyle}>Calender</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(2),
              marginLeft: WP(10),
            }}
          />
          <Pressable style={styles.pressable}>
            <MaterialIcons name="dashboard" size={WP(6)} style={styles.icon} />
            <Text style={styles.textStyle}>Categorize Tasks</Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(2),
              marginLeft: WP(10),
            }}
          />
          <Pressable style={styles.pressable}>
            <MaterialIcons name="share" size={WP(6)} style={styles.icon} />
            <Text style={styles.textStyle}>Share Tasks </Text>
          </Pressable>
          <View
            style={{
              borderColor: COLORS.lightGray,
              borderBottomWidth: WP(0.15),
              marginVertical: WP(2),
              marginLeft: WP(10),
            }}
          />
          <Pressable style={styles.pressable}>
            <Ionicons name="log-out" size={WP(7)} style={styles.icon} />
            <Text style={styles.textStyle}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </CustomModal>
  );
};

export default MoreModal;
