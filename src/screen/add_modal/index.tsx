import CustomModal from "@app/component/modal";
import Input from "@app/component/text_input";
import { AppDispatch, RootState } from "@app/redux/store";
import { addTodo } from "@app/redux/store/taskSlice";
import { COLORS, SIZE } from "@assets/themes";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  isVisible: boolean;
  closeModal?: () => void;
};

const AddModal = (props: Props) => {
  const [addData, setAddData] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);
  const handleAdd = () => {
    if (todos && todos.length >= 10) {
      Alert.alert("Limit reached", "You cannot add more than 10 todos");
      return;
    }

    if (addData && addData.length > 0) {
      dispatch(addTodo(addData));
      setAddData("");
      Keyboard.dismiss();
    }
  };
  return (
    <CustomModal isVisible={props.isVisible} onBackdropPress={props.closeModal}>
      <View style={styles.modal}>
        <View style={styles.textIputView}>
          <Input
            placeholder="Add New Todos"
            onChangeText={(heading) => setAddData(heading)}
            value={addData}
            
          />
          <TouchableOpacity onPress={handleAdd} style={styles.touchable}>
            <Text style={styles.text}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  modal: {
    width: "99%",
    borderTopLeftRadius: WP(6),
    borderTopRightRadius: WP(6),
    height: WP(100),
    backgroundColor: COLORS.white,
    padding: WP(2.7),
    alignSelf: "center",
    marginTop: WP(10),
  },
  textIputView: {
    marginTop: WP(20),
  },
  touchable: {
    marginVertical: WP(2),
    backgroundColor: COLORS.purple,
    width: WP(20),
    borderRadius: WP(2),
    padding: WP(2.5),
    marginTop: WP(5),
    alignSelf: "flex-end",
  },
  text: {
    color: COLORS.white,
    alignSelf: "center",
  },
  addTask: {
    marginVertical: WP(4),
    alignSelf: "center",
    color: COLORS.purple,
    fontSize: SIZE.h8,
    fontWeight: "bold",
  },
});
