import { ActivityIndicator, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "@app/redux/store/taskSlice";
import CardScreen from "../card";
import { styles } from "./styles";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { COLORS } from "@assets/themes";

const TodoItemsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);

  const handleDeleteAll = () => {
    todos.forEach((todo) => {
      dispatch(deleteTodo(todo.id));
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={{ marginVertical: "50%" }}>
        <View
          style={{
            width: WP(10),
            height: WP(10),
            borderRadius: WP(10),
            backgroundColor: COLORS.lightGray,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <ActivityIndicator
            color={"blue"}
            style={{ opacity: 1, alignSelf: "center" }}
          />
        </View>
        <Text style={{ color: COLORS.gray, alignSelf: "center" }}>
          Task in progress ...
        </Text>
      </View>
    );
  }

  if (todos.length < 10) {
    return (
      <View>
        <CardScreen icon="check" size={WP(27)} />
        <Text style={styles.completeTodosText}>
          {`Remaining ${10 - todos.length} todos to be completed`}
        </Text>
      </View>
    );
  } else if (todos.length === 10) {
    return (
      <View>
        <CardScreen icon="check" size={WP(27)} />
        <Text style={styles.completeTodosText}>All tasks completed</Text>
        <Text style={styles.niceWorkStyle}>Nice work!</Text>
        <View style={styles.completeTodos}>
          <Text style={styles.taskCompleted}> Task completed</Text>
          <Pressable onPress={handleDeleteAll}>
            <Text style={styles.undoText}>Undo</Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default TodoItemsScreen;
