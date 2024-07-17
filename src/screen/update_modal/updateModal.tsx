import CustomModal from "@app/component/modal";
import Input from "@app/component/text_input";
import { AppDispatch, RootState } from "@app/redux/store";
import { addTodo, fetchTodos, updateTodo } from "@app/redux/store/taskSlice";
import { COLORS, SIZE } from "@assets/themes";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  isVisible: boolean;
  closeModal?: () => void;
};

const UpdateModal = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [updateData, setUpdateData] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);
  const handleUpdateTodos = () => {
    todos.forEach((todo) => {
      if (!todo.completed) {
        dispatch(updateTodo({ id: todo.id, completed: true }));
        Keyboard.dismiss();
      }
    });
    Keyboard.dismiss();
  };

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchTodos())
      .then(() => setIsLoading(false))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);
  return (
    <CustomModal isVisible={props.isVisible} onBackdropPress={props.closeModal}>
      <View style={styles.modal}>
        <View style={styles.textIputView}>
          <Input
            placeholder="Update Todos"
            onChangeText={(heading) => setUpdateData(heading)}
            value={updateData}
          />
          <TouchableOpacity
            onPress={handleUpdateTodos}
            style={styles.touchable}
          >
            <Text style={styles.text}>
              {isLoading ? "Loading..." : "UPDATE"}
            </Text>
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
