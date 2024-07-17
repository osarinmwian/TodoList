import CustomModal from "@app/component/modal";
import Input from "@app/component/text_input";
import { AppDispatch, RootState } from "@app/redux/store";
import { updateTodo } from "@app/redux/store/taskSlice";
import { COLORS, SIZE } from "@assets/themes";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  selectedTodoId: string | null;
};

const UpdateModal: React.FC<Props> = ({ isVisible, closeModal, selectedTodoId }) => {
  const [updateData, setUpdateData] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);

  const handleUpdateTodos = () => {
    if (selectedTodoId) {
      dispatch(
        updateTodo({
          id: selectedTodoId,
          completed: !todos.find((todo) => todo.id === selectedTodoId)?.completed,
        })
      );
      closeModal(); 
    }
  };

  return (
    <CustomModal isVisible={isVisible} onBackdropPress={closeModal}>
      <View style={styles.modal}>
        <View style={styles.textIputView}>
          <Input
            placeholder="Old Todo"
            onChangeText={(heading) => setUpdateData(heading)}
            value={updateData}
          />
          <Input
            placeholder="New Todo"
            onChangeText={(heading) => setUpdateData(heading)}
            value={updateData}
            inputStyle={{ marginTop: WP(3) }}
          />
          <TouchableOpacity onPress={handleUpdateTodos} style={styles.touchable}>
            <Text style={styles.text}>{"UPDATE"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

export default UpdateModal;

const styles = StyleSheet.create({
  modal: {
    width: "99%",
    borderTopLeftRadius: WP(6),
    borderTopRightRadius: WP(6),
    height: WP(100),
    backgroundColor: COLORS.white,
    padding: WP(2.7),
    alignSelf: "center",
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
    marginTop: WP(10),
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
